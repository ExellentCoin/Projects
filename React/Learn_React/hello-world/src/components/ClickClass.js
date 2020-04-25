import React, { Component } from 'react';

export default class ClickClass extends Component {
    iClicked() {
        console.log('I Clicked!');
    }

    render() {
        return (
            <div>
                <button onClick={this.iClicked}>Click here</button>
            </div>
        );
    }
}
