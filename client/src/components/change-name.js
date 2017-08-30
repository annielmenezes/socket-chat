import React, { Component } from "react";

export default class ChangeNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { newName } = this.state;
    return (
      <div className="change_name_form">
        <h3> Change Name </h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={newName} />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    const { newName } = this.state;
    e.preventDefault();
    this.setState(
      {
        newName: ""
      },
      () => this.props.onChangeName(newName)
    );
  }

  handleChange(e) {
    this.setState({
      newName: e.target.value
    });
  }
}
