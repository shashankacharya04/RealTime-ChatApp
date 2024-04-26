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
        <div className={`chat-bubble ${bubbleBg} `}>
          <img
            src={`${message.image}`}
            alt="image"
            className="h-20 w-40 rounded-md"
          />
        </div>
      )}
    </div>
  );
}
export default Message;
