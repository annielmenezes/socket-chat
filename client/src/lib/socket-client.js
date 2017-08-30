import io from "socket.io-client";

const socket = io("http://localhost:3001");

const api = {};

api.subscribeToInit = cb => socket.on("init", data => cb(null, data));
api.emitMessage = data => socket.emit("send:message", data);
api.subscribeToMessage = cb =>
  socket.on("send:message", data => {
    console.log(data);
    cb(null, data);
  });
api.subscribeToUserJoin = cb => socket.on("user:join", data => cb(null, data));
api.subscribeToUserLeft = cb => socket.on("user:left", data => cb(null, data));
api.emitChangeName = (data, cb) =>
  socket.emit("change:name", data, result => cb(result));
api.subscribeToChangeName = cb =>
  socket.on("change:name", data => cb(null, data));

export default api;
