import React from "react";
import Conversation from "./Conversation";
const Conversations = () => {
  return (
    <div className=" py-2 flex flex-col overflow-hidden">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
