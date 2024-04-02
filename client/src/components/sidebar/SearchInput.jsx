import React, { useState } from "react";
import { Search } from "lucide-react";
import useGetConversation from "../../Hooks/useGetConversation";
import { useSelectedContext } from "../../context/SelectedContext";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearchInput] = useState("");
  const { conversation } = useGetConversation();
  const { setSelectedConvo } = useSelectedContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const convo = conversation.find((c) =>
      c.fullName
        .toLowerCase()
        .includes(search.length > 3 && search.toLowerCase())
    );

    if (convo) {
      setSelectedConvo(convo);
      setSearchInput(""); // some issue with this code
    } else {
      toast.error("No user found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="button button-b bg-emerald-400 p-2 rounded-xl text-white">
        <Search size={30} />
      </button>
    </form>
  );
};

export default SearchInput;
