import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    async increment() {
        await this.setState(prevState => ({
            count: prevState.count++,
        }));
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}
