import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessageCircleDashed } from "lucide-react";
import { useSelectedContext } from "../../context/SelectedContext";
import useTypingIndicator from "../../Hooks/useTypingIndicator";
import { useAuthContext } from "../../context/AuthContext";
function MessageContainer() {
  const { selectedConvo, setSelectedConvo } = useSelectedContext();
  const { authUser } = useAuthContext();
  const { istyping, from } = useTypingIndicator(); // is typing is boolean value where from is the user who is sending the text
  // console.log("istyping", istyping);
  // console.log("from them", from, "to", selectedConvo?._id);
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
          <div className="bg-slate-500 px-4 py-2 mb-2 flex">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConvo.fullName}
            </span>
            <span className="text-green-500  ml-2 font-extralight text-sm">
              {selectedConvo?._id == from ? (
                istyping == true ? (
                  <div className="flex">
                    <span>Typing</span>
                    <span className="loading loading-dots loading-xs mt-1" />
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
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
