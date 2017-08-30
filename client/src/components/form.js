import React, { Component } from "react";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <h3>Write a new message</h3>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} value={text} />
        </form>
      </div>
    );
  }

  submitHandler(e) {
    e.preventDefault();
    const message = {
      user: this.props.user,
      text: this.state.text
    };
    this.setState(
      {
        text: ""
      },
      () => this.props.onMessageSubmit(message)
    );
  }

  changeHandler(e) {
    this.setState({ text: e.target.value });
  }
}
