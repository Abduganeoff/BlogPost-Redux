import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
	const posts = await jsonPlaceHolder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: posts.data
	});
};

export const fetchUser = (id) => async (dispatch) => {
	const user = await jsonPlaceHolder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: user.data });
};
