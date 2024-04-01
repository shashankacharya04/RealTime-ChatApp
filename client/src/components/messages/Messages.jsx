import useGetConversation from "../../Hooks/useGetConversation";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeletons from "../skeletons/MessageSkeletons";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  console.log("messages are", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length == 0 && (
        <p className="flex text-lg  font-bold justify-center mt-52">
          send a message to start conversation 👋
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => <Message message={msg} key={msg._id} />)}
    </div>
  );
};
export default Messages;
