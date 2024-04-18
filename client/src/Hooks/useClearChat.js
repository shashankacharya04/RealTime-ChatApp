import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelectedContext } from '../context/SelectedContext';
import { useSocketContext } from '../context/SocketContext';
import { useAuthContext } from '../context/AuthContext';

const useClearChat = () => {
    const [loading,setLoading] = useState(false);
    const{selectedConvo,setMessages} =useSelectedContext();
    const {authUser} = useAuthContext();
    const {socket} = useSocketContext();
    const clearChat = async()=>{
        setLoading(true);
        try{
            const res = await fetch (`/api/messages/clear/${selectedConvo?._id}`,{
                method:"DELETE",
               
            })
            const data = res.json();
            setMessages("");
            //socket.emit("clearChat",{to:selectedConvo._id,from:authUser._id});  working on this
            if(data.error) throw new Error(data.error)
        }catch(error){
           toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
  
    return {clearChat,loading}
}

export default useClearChat
