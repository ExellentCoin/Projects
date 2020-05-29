import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parentName: 'Mama',
			childName: '',
		};

		this.talkHandler = this.talkHandler.bind(this);
	}

	async talkHandler(child) {
		await this.setState({
			childName: child,
		});
		alert(`Hello ${this.state.parentName} from ${this.state.childName}`);
	}

	render() {
		return (
			<div>
				<ChildComponent talkHandler={this.talkHandler} />
			</div>
		);
	}
}
