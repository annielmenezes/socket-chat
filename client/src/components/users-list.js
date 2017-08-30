import React from "react";

export default ({ users }) => (
  <div>
    <h3>Users Online</h3>
    <ul>{users.map((user, i) => <li key={i}>{user}</li>)}</ul>
  </div>
);
