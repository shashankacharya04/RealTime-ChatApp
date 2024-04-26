import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessageCircleDashed, EllipsisVertical } from "lucide-react";
import { useSelectedContext } from "../../context/SelectedContext";
import useTypingIndicator from "../../Hooks/useTypingIndicator";
import useClearChat from "../../Hooks/useClearChat";
function MessageContainer() {
  const { selectedConvo, setSelectedConvo } = useSelectedContext();
  const { istyping, from } = useTypingIndicator(); // is typing is boolean value where from is the user who is sending the text
  const { loading, clearChat } = useClearChat();
  useEffect(() => {
    return () => setSelectedConvo("");
  }, [setSelectedConvo]);
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
            <span className="label-text mr-2">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConvo.fullName}
            </span>
            <span className="text-green-500  ml-2 font-extralight text-sm">
              {selectedConvo?._id == from ? (
                istyping == true ? (
                  <div className="flex">
                    <span>Typing...</span>
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </span>
            <div className="dropdown dropdown-bottom dropdown-end ml-auto">
              <div tabIndex={0} role="button">
                <EllipsisVertical />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-52 bg-opacity-50"
              >
                <li>
                  <div className="font-semibold italic">
                    <span>Clear Chat</span>
                    <button
                      className="border-2  px-2 rounded-full ml-auto hover:border-red-400 hover:text-red-400"
                      onClick={async () => await clearChat()}
                      disabled={loading}
                    >
                      clear
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
