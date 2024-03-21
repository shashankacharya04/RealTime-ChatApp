import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [recievedMsg, setRecievedMsg] = useState("");
  function sendMessage() {
    socket.emit("send_message", { message: message, room: room });
  }
  function joinRoom() {
    if (room !== "") {
      socket.emit("join_room", room);
      return <p>joined room {room}</p>;
    }
  }
  useEffect(() => {
    socket.on("recieve_message", (data) => {
      // alert(data);
      setRecievedMsg(data.message);
      console.log("messges are", recievedMsg);
    });
  }, [socket]);
  return (
    <>
      <input
        type="text"
        placeholder="enter message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="room number"
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send message</button>
      <button onClick={joinRoom}>join room</button>
      <h4>message is:</h4>

      {recievedMsg}
    </>
  );
}

export default App;
