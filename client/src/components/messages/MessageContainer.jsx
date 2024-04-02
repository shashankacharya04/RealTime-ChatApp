import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessageCircleDashed } from "lucide-react";
import { useSelectedContext } from "../../context/SelectedContext";
function MessageContainer() {
  const { selectedConvo, setSelectedConvo } = useSelectedContext();
  useEffect(() => {
    return () => setSelectedConvo("");
  }, [setSelectedConvo]);
  // const noChatSelected = true; // make it dynamix
  const NoChatSelected = () => {
    return (
      <div className=" flex justify-center items-center w-full h-full">
        <div className=" text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>welcome ❄</p>
          <p>select a chat to start messaging</p>
          <MessageCircleDashed size={40} />
        </div>
      </div>
    );
  };
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConvo ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConvo.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
