import { useEffect, useRef } from "react";
import useGetConversation from "../../Hooks/useGetConversation";
import useGetMessages from "../../Hooks/useGetMessages";
import { useSelectedContext } from "../../context/SelectedContext";
import MessageSkeletons from "../skeletons/MessageSkeletons";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // const { messages } = useSelectedContext();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length == 0 && (
        <p className="flex text-lg  font-bold justify-center mt-52 ">
          send a message to start conversation 👋
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessageRef}>
            <Message message={msg} />
          </div>
        ))}
    </div>
  );
};
export default Messages;
