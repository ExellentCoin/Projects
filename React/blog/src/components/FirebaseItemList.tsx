import React, { Component } from 'react';
import { getFirebaseDataDisplayable } from '../helpers/Firebase-helpers';
import NewPostButton from './NewPostButton';

interface State {
	data?: any;
	updateRenderState?: any;
}

interface Props {
	data?: any;
	updateRenderState?: any;
}

class FirebaseItemList extends Component<State, Props> {
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	render() {
		return (
			<React.Fragment>
				{' '}
				{this.state.data}
				<NewPostButton updateRenderState={this.state.updateRenderState} />
			</React.Fragment>
		);
	}

	async componentDidMount() {
		this.setState({
			data: await getFirebaseDataDisplayable(),
		});
	}
}

export default FirebaseItemList;
