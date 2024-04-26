import { Send, Image } from "lucide-react";
import { useRef, useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";
import useTypingIndicator from "../../Hooks/useTypingIndicator";
import useHandleSendImg from "../../Hooks/useHandleSendImg";
import PreviewImageModal from "../Modals/PreviewImageModal";
const MessageInput = () => {
  const { loading, sendMsg } = useSendMessage();
  const [message, setMessage] = useState("");
  const { handleKeyDown, handleKeyUp, handleBlur } = useTypingIndicator();
  const { handleSendImg, imageUrl, setImageUrl } = useHandleSendImg();
  const imageIcon = useRef(null);
  const handleSendMessages = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMsg(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSendMessages}>
      <div className="w-full flex gap-1">
        <input
          type="text"
          className="border text-sm rounded-lg block w-80 p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
        />
        <div className="flex gap-2  ">
          <button type="submit" className="border  rounded-lg px-2">
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <Send />
            )}
          </button>
          <button className="border-none bg-transparent">
            <Image
              size={35}
              strokeWidth={1}
              onClick={() => imageIcon.current.click()}
              className="cursor-pointer"
            />
          </button>

          <input
            type="file"
            onChange={handleSendImg}
            ref={imageIcon}
            hidden
          ></input>
        </div>
      </div>
      {imageUrl && (
        <PreviewImageModal setImageUrl={setImageUrl} imageUrl={imageUrl} />
      )}
    </form>
  );
};
export default MessageInput;
