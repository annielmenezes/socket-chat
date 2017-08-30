import React, { Component } from "react";
import "./App.css";
import api from "./lib/socket-client";
import UsersList from "./components/users-list";
import MessageList from "./components/messages-list";
import MessageForm from "./components/form";
import ChangeNameForm from "./components/change-name";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      messages: [],
      text: ""
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  componentDidMount() {
    api.subscribeToInit((err, data) =>
      this.setState({ users: data.users, user: data.name })
    );
    api.subscribeToMessage((err, data) => {
      this.setState({
        messages: [...this.state.messages, data]
      });
    });
  }

  render() {
    const { users, messages, user } = this.state;
    return (
      <div className="socket-chat">
        <UsersList users={users} />
        <MessageList messages={messages} user={user} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit} user={user} />
        <ChangeNameForm onChangeName={this.handleChangeName} />
      </div>
    );
  }

  handleMessageSubmit(message) {
    const { messages } = this.state;
    this.setState(
      {
        messages: [...messages, message]
      },
      () => {
        api.emitMessage(message);
      }
    );
  }

  handleChangeName(newName) {
    const oldName = this.state.user;
    const { users } = this.state;
    var index = users.indexOf(oldName);
    api.emitChangeName({ name: newName }, result => {
      if (!result) {
        return alert("There was an error changing your name");
      }
      users.splice(index, 1, newName);
      this.setState({ users, user: newName });
    });
  }
}

export default App;
