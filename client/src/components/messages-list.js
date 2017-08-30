import React from "react";
import Message from "./message";

export default ({ messages, user }) => (
  <div>
    <h2>Conversation:</h2>
    {messages.map((message, i) => (
      <Message
        key={i}
        user={message.user}
        className={message.user === user ? "onwner" : ""}
        text={message.text}
      />
    ))}
  </div>
);
