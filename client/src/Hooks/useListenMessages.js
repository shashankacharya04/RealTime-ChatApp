import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useSelectedContext } from '../context/SelectedContext';
import notifysound from "../assets/notifysound.mp3"
const useListenMessages = () => {
 const {socket} = useSocketContext();
 const {messages,setMessages} = useSelectedContext();
 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{setMessages([...messages,newMessage]);
      const sound = new Audio(notifysound);
      sound.play();
   });
    return ()=> socket?.off("newMessage"); //important bcz of multiple notification sound
 },[socket,setMessages,messages])
}

export default useListenMessages
