import React from 'react'
import { useState } from 'react'
import {toast} from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext.jsx';
import handleInputError from './handleInputError';
const useSignup = () => {
    const [loading,setLoading]= useState(false);
    const {setAuthUser} = useAuthContext()
    const signup = async ({fullName,userName,password,confirmPassword,gender})=>{
        const success= handleInputError({fullName,userName,password,confirmPassword,gender},"signup")
        if(!success) return
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            //localstorage 
            localStorage.setItem("chat-user", JSON.stringify(data))
            // context
            setAuthUser(data);
            console.log("data is",data)
          
        } catch (error) {
            toast.error(error.message)
        }finally{
           setLoading(false);
        }
    }
    return {loading,signup}
    }

export default useSignup
