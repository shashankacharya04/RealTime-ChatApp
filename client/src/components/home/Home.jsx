import React from "react";
import SideBar from "../sidebar/SideBar";
import MessageContainer from "../messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex gap-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
