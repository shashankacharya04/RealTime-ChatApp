import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
 const[loading,setLoading] =useState(false);
 const {setAuthUser} =useAuthContext();
 const logout =async()=>{
    setLoading(true)
    try {
       const res =await fetch("/api/auth/logout",{
           method:"POST",
           headers:{"content-type":"application/json"}
       });
       const data = res.json();
       if(data.error) throw new Error(data.error)
       setAuthUser(null);
     localStorage.removeItem("chat-user");
   
    } catch (error) {
       toast.error(error.messagae)
    }finally{
   setLoading(false)
    }
 }
 return {loading,logout}
}

export default useLogout
