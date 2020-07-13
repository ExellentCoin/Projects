import React, { Component } from 'react';
import { Iprops } from '../helpers/interface-helper';
import NewPostButton from './NewPostButton';
import FirebaseItemList from './FirebaseItemList';
import PostForm from './PostForm';

interface IState {
	creatingPost?: boolean;
}

class Main extends Component<IState, Iprops> {
	state: IState;

	constructor(props: any) {
		super(props);
		this.state = {
			creatingPost: false,
		};
	}

	updateState(state: object) {
		this.setState(state);
	}

	render() {
		let main: JSX.Element;
		if (this.state.creatingPost) {
			main = <PostForm updateRenderState={this.updateState} />;
		} else {
			main = <FirebaseItemList updateRenderState={this.updateState} />;
		}

		return main;
	}
}

export default Main;
