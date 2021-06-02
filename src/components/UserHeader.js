import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class UserHeader extends Component {
	render() {
		const { user } = this.props;
		if (!user) {
			return null;
		}

		return (
			<Typography
				style={{ marginLeft: '4.5rem' }}
				variant="button"
				display="block"
				gutterBottom
			>
				{user.name}
			</Typography>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find((user) => user.id === ownProps.userId)
	};
};
export default connect(mapStateToProps)(UserHeader);
