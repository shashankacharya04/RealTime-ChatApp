import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/getEmoji";

const Conversations = () => {
  const { loading, conversation } = useGetConversation();

  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {conversation.map((convo, idx) => (
        <Conversation
          key={convo._id}
          convo={convo}
          emoji={getRandomEmoji()}
          lastIdx={idx === convo.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner "></span> : null}
    </div>
  );
};

export default Conversations;
