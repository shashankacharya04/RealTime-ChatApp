import "./App.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [recievedMsg, setRecievedMsg] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  function sendMessage() {
    socket.emit("send_message", { message: message, room: room });
  }
  useEffect(() => {
    console.log(socket);
    setUsers((prev) => {
      return [...prev, socket];
    });
    console.log("users are", users);
  }, []);
  function joinRoom() {
    if (room !== "") {
      socket.emit("join_room", room);
      return <p>joined room {room}</p>;
    }
  }
  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setRecievedMsg(data.message);
      console.log("messges are", recievedMsg);
    });
    console.log("users are con", socket.id);
  }, [socket]);
  useEffect(() => {
    socket.on("userid", (userid) => {
      setUserId(userid);
    });
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col items-center border-2 justify-center ">
        <div>
          <p className="font-bold">user is {userId}</p>
          <h1>users are {}</h1>
        </div>
        <div className="flex gap-3 items-center justify-center border-2">
          <input
            type="text"
            placeholder="enter message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="border-2 border-slate-700"
          />
          <input
            type="text"
            placeholder="room number"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            className="border-2 border-slate-700"
          />
          <button
            onClick={sendMessage}
            className="border-2 border-slate-700 p-1"
          >
            send message
          </button>
          <button onClick={joinRoom} className="border-2 border-slate-700 p-1">
            join room
          </button>
        </div>
        <h4>message is:</h4>
        {recievedMsg}
      </div>
    </>
  );
}

export default App;
