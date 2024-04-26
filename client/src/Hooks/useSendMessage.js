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
        body:JSON.stringify({message:message})
        })
        
        const data = await res.json();
       
        if(data.error){
            
            throw new Error(data.error);
            
        }
        setMessages((prev)=> ([...prev,data]) )
    } catch (error) {
        console.log("error is",error.message);
        toast.error(error.message)
    }finally{
setLoading(false)
    }
 }
 const sendImg =async(img)=>{
    setLoading(true)
    try {
        const res = await fetch(`/api/messages/send/${ selectedConvo?._id}`,
        {method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({image:img})
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
            
        }
        setMessages((prev)=> ([...prev,data]) )
    } catch (error) {
        console.log("error is",error.message);
        toast.error(error.message)
    }finally{
setLoading(false)
    }
 }
 return {loading,sendMsg,sendImg}
}
export default useSendMessage
