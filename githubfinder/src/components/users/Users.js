import React from 'react';
import UserItem from './UserItem';
// import Spinner from '../layout/Spinner';
// import Proptypes from 'prop-types';

function Users(props) {
	console.log(props);
	const { loading, users } = props;
	console.log(loading);
	console.log(users);
	if (loading) {
		// return Spinner;
	}

	return (
		<div style={userStyle}>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}

// Users.propTypes = {
// 	users: Proptypes.array.isRequired,
// 	loading: Proptypes.bool.isRequired,
// };

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridCap: '1rem',
};

export default Users;
