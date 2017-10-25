import React, { Component } from "react";
// import api from "../lib/socket-client";

import ContactsForm from "./ContactsForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main className="main">
        <aside className="sidebar">
          <ContactsForm />
          <ul className="contact-list">
            <li className="contact active">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt="lorem"
              />
              <h4>Kurt Cobain</h4>
            </li>
            <li className="contact">
              <img
                src="https://randomuser.me/api/portraits/thumb/women/10.jpg"
                alt="lorem"
              />
              <h4>Areta Franklin</h4>
            </li>
            <li className="contact">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/65.jpg"
                alt="lorem"
              />
              <h4>Sergio Mendes</h4>
            </li>
          </ul>
          <div>
            <a>add new contact</a> {/* Add contact based on phone number */}
            <a>settings</a> {/* Call modal that chage username and avatar */}
          </div>
        </aside>
        <section className="chat">
          <header className="chat-header">
            <h2>User name</h2>
            <div>
              <a>add person to chat</a>
              {/* Add a new person in contact list to current chat */}
              <a>deletar chat</a> {/* Remover todo o histórico do chat atual */}
            </div>
          </header>
          <ul className="tread">
            <li className="tread-item">
              <img
                src="https://randomuser.me/api/portraits/thumb/women/22.jpg"
                alt="lorem"
              />
              <div>
                <h4>Meu Nome</h4>
                <datetime>5:25 am</datetime>
                <p>Lorem Ipsum sit meat at e</p>
              </div>
            </li>
            <li className="tread-item">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/74.jpg"
                alt="lorem"
              />
              <div>
                <h4>Meu Nome</h4>
                <datetime>2:25 am</datetime>
                <p>Casiuds é mé demaisis</p>
              </div>
            </li>
          </ul>
          <form>
            <input placeholder="Type a menssage" />
          </form>
        </section>
      </main>
    );
  }
}

export default App;
