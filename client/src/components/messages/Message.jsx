import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetConversation from "../../Hooks/useGetConversation";
import { useSelectedContext } from "../../context/SelectedContext";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConvo } = useSelectedContext();
  // console.log("message is from message.jsx", message);
  // console.log("sender id is", message.senderId);
  // console.log("authenticated id is", authUser._id);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat -start";
  // const profilePic = fromMe ? authUser.profilePic : selectedConvo.profilePic;
  const bubbleBg = fromMe ? "bg-blue-700" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble ${bubbleBg} `}>{message.message}</div>
    </div>
  );
}

export default Message;
{
  /* <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={`${profilePic}`} />
        </div>
      </div>

      <div className="chat-bubble">{message.message}</div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */
}
