
import React, { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useSelectedContext } from '../context/SelectedContext';
import { useAuthContext } from '../context/AuthContext';

const useTypingIndicator = () => {
   const {socket} =useSocketContext();
   const {selectedConvo} =useSelectedContext();
   const {authUser} =useAuthContext();
   const [istyping,setIsTyping] = useState(false);
   const [from,setFrom] =useState("");
  
   const handleKeyDown = (e) => {
     setTimeout(()=>{
      socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:true});
     },100)
          
    };
    const handleKeyUp = (e) => {
      setTimeout(()=>{
         socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:false});
      },2000)
    };
    const handleBlur =(()=>{
       setTimeout(()=>{
        // socket?.off("beforeTyping");
        socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:false});
       },3000)
    })
   useEffect(()=>{
      socket?.on("typing",(value)=>{
         if(value.typing == true){
           setIsTyping(true);
           setFrom(value.from);
         }else{
           setIsTyping(false);
         }
      })
     return ()=> {socket?.off("beforeTyping");console.log("component unmounted")};
     
   },[socket])
   
   return {istyping,from,handleKeyDown,handleKeyUp,handleBlur}
       
}

export default useTypingIndicator
