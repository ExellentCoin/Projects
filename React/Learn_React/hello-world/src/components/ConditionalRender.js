import React, { Component } from 'react';

export default class ConditionalRender extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};

		this.logInHandler = this.logInHandler.bind(this);
	}

	async logInHandler() {
		await this.setState({
			isLoggedIn: true,
		});
	}

	render() {
		return this.state.isLoggedIn ? (
			<h1>Welcome back Jonas.</h1>
		) : (
			<div>
				<h1>You are not yet logged in.</h1>
				<button onClick={this.logInHandler}>Log In</button>
			</div>
		);
	}
}
