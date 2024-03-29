import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessageCircleDashed } from "lucide-react";
function MessageContainer() {
  const noChatSelected = true; // make it dynamix
  const NoChatSelected = () => {
    return (
      <div className=" flex justify-center items-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>welcome ❄</p>
          <p>select a chat to start messaging</p>
          <MessageCircleDashed size={40} />
        </div>
      </div>
    );
  };
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;