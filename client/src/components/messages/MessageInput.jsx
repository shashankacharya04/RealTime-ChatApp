import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";
import useTypingIndicator from "../../Hooks/useTypingIndicator";
const MessageInput = () => {
  const { loading, sendMsg } = useSendMessage();
  const [message, setMessage] = useState("");
  const { handleKeyDown, handleKeyUp, handleBlur } = useTypingIndicator();
  const handleSendMessages = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMsg(message);
    gi;
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSendMessages}>
      <div className="w-full flex gap-1">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
        />
        <button type="submit" className="border p-1 rounded-md px-2">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <Send />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
