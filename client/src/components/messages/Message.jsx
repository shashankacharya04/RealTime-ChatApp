import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={"https://avatar.iran.liara.run/public"} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>hi whats up?</div>
      <div class="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
}

export default Message;
