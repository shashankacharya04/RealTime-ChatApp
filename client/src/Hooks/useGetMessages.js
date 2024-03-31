import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useSelectedContext } from "../context/SelectedContext";

const useGetMessages =()=>{
    const [loading,setLoading] =useState(false);
    const {messages,setMessages,selectedConvo,setSelectedConvo} = useSelectedContext();
    useEffect(()=>{
        const getMessage =async()=>{
            setLoading(true)
            try {
                const res = await fetch(`api/messages/send/${selectedConvo?._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error)
                setMessages(data)
            } catch (error) {
                    toast.error(error.message)
            }finally{
        setLoading(false)
            }
            }
            if(selectedConvo?._id) getMessage();      
           
     },[selectedConvo?._id,setMessages])
    
     return { messages,loading}   
}