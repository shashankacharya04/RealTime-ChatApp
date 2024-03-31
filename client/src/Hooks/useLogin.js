import { Parentheses } from 'lucide-react';
import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext.jsx';
import handleInputError from './handleInputError';
const useLogin = () => {
 const [loading,setLoading]=useState(false);
 const {setAuthUser} = useAuthContext();
 const login =async({userName,password})=>{
 const success = handleInputError({userName,password},"login");
 if(!success) return;
 setLoading(true)
 try {
    const res = await fetch("/api/auth/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({userName,password})
    });
    const data = await res.json();
    
    console.log("data is",data)
    if(data.error){
        throw new Error(data.error)
        
    }
    localStorage.setItem("chat-user",JSON.stringify(data));
    setAuthUser(data)
 } catch (error) {
    toast.error(error.message)
 }finally{
setLoading(false)
 }
 }
 return {loading,login}
}

export default useLogin
