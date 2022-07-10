import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		// console.log(e.event.value);
		if (this.state.text === '') {
			console.log('boom');
			this.props.setAlert('Please enter something', 'light');
		} else {
			this.props.getUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	clearUsers = (e) => {
		e.preventDefault();
		console.log(e);
		this.props.clearUser();
	};

	onChange = (e) => {
		console.log(e);
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="searchForm">
				<input
					type={'text'}
					name="text"
					placeholder="Search User"
					onChange={this.onChange}
					value={this.state.text}
				/>
				<input type={'submit'} name="submit" className="submitBtn" />
				{this.props.showClear ? (
					<button className="submitBtn clearBtn" onClick={this.clearUsers}>
						Clear
					</button>
				) : (
					console.log('no search yet')
				)}
			</form>
		);
	}
}

export default Search;
