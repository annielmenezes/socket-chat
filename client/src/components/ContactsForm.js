import React, { Component } from "react";

class ContactsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="contact-form">
        <input
          value={term}
          onChange={this.onInputChange}
          placeholder="Search a contact"
        />
      </div>
    );
  }

  onInputChange(event) {
    const { value } = event.target;
    this.setState({ term: value });
  }
}

export default ContactsForm;
