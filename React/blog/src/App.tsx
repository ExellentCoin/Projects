import React, { Component } from 'react';

import { FireBaseInit, getFirebaseData } from './Firebase-helpers';
import Item from './components/Item';
import { Header } from './components/Stuff';
import { IState, Iprops, IData } from './interface-helper';

FireBaseInit(); // Initialize Firebase and firestore

export default class App extends Component<Iprops, IState> {
	state: IState;

	constructor(props: Iprops) {
		super(props);
		this.state = {
			data: [],
		};
	}

	render() {
		let Items: any = [];
		const { data = [] } = this.state;
		if (data !== []) {
			data.map(i => {
				return Items.push(<Item key={i.id} author={i.author} content={i.content} />);
			});
		}
		return (
			<div className='App'>
				<Header />
				{Items}
			</div>
		);
	}

	async componentDidMount() {
		let loadedData: IData[] = [];
		loadedData = await getFirebaseData();
		await this.setState({
			data: loadedData,
		});
	}
}
