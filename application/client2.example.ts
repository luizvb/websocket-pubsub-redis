import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
});

socket.on("connect", () => {
  socket.emit("SUBSCRIBE", {
    channel: "participants"
  });
});

socket.on('participants', (data) => {
  console.log(JSON.parse(data));
})
