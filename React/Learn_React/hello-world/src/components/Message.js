import React, { Component } from 'react';

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            message: 'hello Jonas',
            test: 'lol',
        };
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subbing!',
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>{this.state.test}</p>
                <button onClick={() => this.changeMessage()}>
                    Subscripe pls.
                </button>
            </div>
        );
    }
}
