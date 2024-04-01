import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetConversation from "../../Hooks/useGetConversation";
import { useSelectedContext } from "../../context/SelectedContext";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConvo } = useSelectedContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat -start";
  const profilePic = fromMe ? authUser.profilePic : selectedConvo.profilePic;
  return (
    <div className={`chat ${chatClassName}`}>
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${profilePic}`} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        {message.message}
      </div>
      <div class="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
}

export default Message;
