import React from "react";
import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
      />
      <button className="button button-b bg-emerald-400 p-2 rounded-xl text-white">
        <Search size={30} />
      </button>
    </form>
  );
};

export default SearchInput;
