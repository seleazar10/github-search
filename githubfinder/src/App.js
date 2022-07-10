import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};
	async componentDidMount() {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({
			users: res.data,
			loading: false,
		});
	}

	getUsers = async (text) => {
		this.setState({ loading: true });
		console.log(text);

		const resDeux = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(resDeux);
		this.setState({
			users: resDeux.data.items,
			loading: false,
		});
	};

	clearUser = () => {
		this.setState({ users: [] });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
	};

	render() {
		const { loading, users } = this.state;
		return (
			<Router>
				<div className="app-body">
					<Navbar />

					<div className="container">
						<Alert alert={this.state.alert} />
						<Routes>
							<Route
								exact
								path="/"
								element={
									<Fragment>
										<Search
											getUsers={this.getUsers}
											clearUser={this.clearUser}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								}
							/>
							<Route exact path="about" element={<About />} />
							<Route excact path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;
