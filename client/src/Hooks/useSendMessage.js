import React, { useState } from 'react'
import { useSelectedContext } from '../context/SelectedContext';
import toast from 'react-hot-toast';

const useSendMessage = () => {
 const[loading,setLoading] =useState(false);

 const {messages,setMessages,selectedConvo}= useSelectedContext();
 
 const sendMsg =async(message)=>{
    setLoading(true)
    try {
        const res = await fetch(`/api/messages/send/${ selectedConvo?._id}`,
        {method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({message})
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        setMessages((prev)=> ([...prev,data]) )
    } catch (error) {
        toast.error(error.message)
    }finally{
setLoading(false)
    }
 }
 return {loading,sendMsg}
}
export default useSendMessage
