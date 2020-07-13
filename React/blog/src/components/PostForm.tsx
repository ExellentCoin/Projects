import React, { Component } from 'react';
import NewPostButton from './NewPostButton';

interface Props {
	updateRenderState: any;
}

class PostForm extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<form action='submit'>
				<textarea></textarea>
				<button
					onClick={this.props.updateRenderState({
						creatingPost: false,
					})}
				>
					upload
				</button>
			</form>
		);
	}

	uploadMessage() {
		console.log('you uploaded a message');
	}
}

export default PostForm;
