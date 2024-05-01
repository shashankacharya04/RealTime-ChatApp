import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetConversation from "../../Hooks/useGetConversation";
import { useSelectedContext } from "../../context/SelectedContext";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConvo } = useSelectedContext();
  console.log("messsage is", message);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat -start";
  // const profilePic = fromMe ? authUser.profilePic : selectedConvo.profilePic;
  const bubbleBg = fromMe ? "bg-blue-700" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      {message.message && (
        <div className={`chat-bubble ${bubbleBg} `}>{message.message}</div>
      )}
      {message.image && (
        <div>
          <img
            src={`${message.image}`}
            alt="image"
            className="h-25 w-52 rounded-md border-black border-2 "
          />
        </div>
      )}
      {message.video && (
        <div>
          <video
            controls
            className="h-40 w-64 border-slate-700 border-2 rounded-md"
          >
            <source src={`${message.video}`} />
          </video>
        </div>
      )}
    </div>
  );
}
export default Message;
