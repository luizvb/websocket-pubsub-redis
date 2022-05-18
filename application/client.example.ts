import { io } from "socket.io-client";
import { createClient } from 'redis';

const socket = io("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
});

socket.on("connect", () => {
  setInterval(() => { 
    console.log('enviando')
    socket.emit("PUBLISH", {
      channel: "participants",
      message: JSON.stringify({
        participants: {
          "name": "John Doe",
          "value": Math.floor(Math.random() * 100)
        }
      })
    });
  }, 1000);
});

