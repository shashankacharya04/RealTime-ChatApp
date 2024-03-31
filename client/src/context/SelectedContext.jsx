import { createContext, useContext, useState } from "react";

export const SelectedContext = createContext();
export const useSelectedContext = () => {
  return useContext(SelectedContext);
};
export const SelectedContextProvider = ({ children }) => {
  const [selectedConvo, setSelectedConvo] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <SelectedContext.Provider
      value={{ selectedConvo, setSelectedConvo, messages, setMessages }}
    >
      {children}
    </SelectedContext.Provider>
  );
};
