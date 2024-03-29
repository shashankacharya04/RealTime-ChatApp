import React from 'react'
import { useState } from 'react'
import {toast} from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';
const useSignup = () => {
    const [loading,setLoading]= useState(false);
    const {setAuthUser} = useAuthContext()
    const signup = async ({fullName,userName,password,confirmPassword,gender})=>{
        const success= handleInputError({fullName,userName,password,confirmPassword,gender})
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
function handleInputError({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("fill up the form nigga and them submit");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("password does not match");
        return false;
    }
    if(password.length< 6){
        toast.error("password must be atleast 6 characters long");
        return false
    }
    return true
    

}
