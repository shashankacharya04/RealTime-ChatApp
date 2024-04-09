
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
   // const IsTyping =(value)=>{
   //    console.log("value is",value)
   //    if(value){
   //       socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:true});
   //    } else{
   //       socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:false});
   //    }
   //     console.log("istyping called");
       
       
   // }
   const handleKeyDown = (e) => {
     setTimeout(()=>{
      socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:true});
     },100)
         
      
    };
    setTimeout(()=>{
      
    })
    const handleKeyUp = (e) => {
      setTimeout(()=>{
         socket.emit("beforeTyping",{selectedUser:selectedConvo?._id,senderId:authUser._id,typing:false});
      },2000)
    };
   useEffect(()=>{
      socket?.on("typing",(value)=>{
         if(value.typing == true){
           setIsTyping(true);
           setFrom(value.from);
         }else{
           setIsTyping(false);
         }
      })
     // return ()=> socket?.off("typing");
   },[socket])
   
   return {istyping,from,handleKeyDown,handleKeyUp}
       
}

export default useTypingIndicator
