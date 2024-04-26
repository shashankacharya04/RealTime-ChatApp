import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
const useHandleSendImg = () => {
    const [imageUrl,setImageUrl] =useState(null);
 const handleSendImg =(e)=>{
     const file = e.target.files[0];
     console.log("url is",file)
     if(file && file.type.startsWith("image/")){
        const fr = new FileReader(); 
        fr.readAsDataURL(file);  
        fr.onloadend =()=>{
            console.log(fr.result) 
            setImageUrl(fr.result)
        }          
     }else{
        toast.error("file not supported");
        setImageUrl(null);
     }
 }
return {handleSendImg,imageUrl,setImageUrl}
}


export default useHandleSendImg
