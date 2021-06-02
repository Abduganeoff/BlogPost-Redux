import React, { Component } from 'react';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const styles = (theme) => ({
	inline: {
		display: 'inline'
	}
});
class BlogPost extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderPosts() {
		return this.props.posts.map((post, idx) => {
			return (
				<div key={post.id}>
					<ListItem>
						<ListItemAvatar>
							<PersonIcon />
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography variant="h5">
									{post.title}
								</Typography>
							}
							secondary={post.body}
						/>
					</ListItem>
					<UserHeader userId={post.userId} />

					{idx < this.props.posts.length - 1 && <Divider />}
				</div>
			);
		});
	}

	render() {
		return <List>{this.renderPosts()}</List>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(
	withStyles(styles)(BlogPost)
);
