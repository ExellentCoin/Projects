import React, { Component } from 'react';

export default class FormHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            content: '',
            topic: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTopic = this.handleTopic.bind(this);
    }

    handleEmail = async event => {
        await this.setState({
            email: event.target.value,
        });
    };

    handleContent = async event => {
        await this.setState({
            content: event.target.value,
        });
    };

    handleTopic = async event => {
        await this.setState({
            topic: event.target.value,
        });
    };

    handleSubmit = event => {
        alert(`${this.state.email} ${this.state.content} ${this.state.topic}`);
        event.preventDefault();
    };

    render() {
        const { email, content, topic } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type='text' value={email} onChange={this.handleEmail} placeholder='Register your email here.'></input>
                    </div>
                    <br />
                    <div>
                        <label>Content: </label>
                        <textarea value={content} onChange={this.handleContent} placeholder='Put your content here.'></textarea>
                    </div>
                    <br />
                    <div>
                        <label>Topic: </label>
                        <select value={topic} onChange={this.handleTopic}>
                            <option selected default hidden></option>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Veu</option>
                        </select>
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
