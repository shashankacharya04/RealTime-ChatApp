import React from "react";
import SearchInput from "./SearchInput";
import LogoutBtn from "./LogoutBtn";
import Conversations from "./Conversations";
const SideBar = () => {
  return (
    <div className="border-r border-slate-800 p-3 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
