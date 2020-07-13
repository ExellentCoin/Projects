import React, { Component } from 'react';

interface Props {
	updateRenderState: any;
}

class NewPostButton extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<div className='container'>
				<button
					onClick={this.props.updateRenderState({
						creatingPost: true,
					})}
					type='button'
					className='btn btn-primary btn-sm float-right'
				>
					Create New Note
				</button>
			</div>
		);
	}
}

export default NewPostButton;
