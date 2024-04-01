import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
// users for side bar
const useGetConversation = () => {
  const [loading,setLoading] =useState(false);
  const [conversation,setConversation] =useState([])
  useEffect(()=>{
    const getConvo = async()=>{
        setLoading(true);
        try {
            const res = await fetch("/api/user");
            const data = await res.json();
            setConversation(data);
            if(data.error){
                throw new Error(data.error)
            }
            
        } catch (error) {
            toast.error(error.message)
        }finally{
         setLoading(false);
        }
      }
      getConvo();
  },[])
  return {loading,conversation}
}

export default useGetConversation
