import React from "react";

export default ({ user, text, className }) => (
  <div className={className}>
    <strong>{user}: </strong>
    <span>{text}</span>
  </div>
);
