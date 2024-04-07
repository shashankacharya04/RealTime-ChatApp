import { useEffect } from "react";
import { useSelectedContext } from "../../context/SelectedContext.jsx";
import { useSocketContext } from "../../context/SocketContext.jsx";

const Conversation = ({ convo, emoji, lastIdx }) => {
  const { selectedConvo, setSelectedConvo } = useSelectedContext();
  const isSele = selectedConvo?._id === convo._id;
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(convo._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${
          isSele ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConvo(convo)}
      >
        {/* // online offline should be dynamix */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={convo.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex  flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{convo.fullName}</p>

            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
