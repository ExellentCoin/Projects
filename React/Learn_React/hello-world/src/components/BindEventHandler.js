import React, { Component } from 'react';

export default class BindEventHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Click to change me!',
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'You changed me!',
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    {this.state.message}
                </button>
            </div>
        );
    }
}
