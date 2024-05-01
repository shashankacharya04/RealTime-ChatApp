import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
const useHandleSendImg = () => {
    const [imageUrl,setImageUrl] =useState(null);
    const [videoUrl,setVideoUrl] =useState(null);
 const handleSendImg =(e)=>{
     const file = e.target.files[0];
     console.log("url is",file)
     if(file && file.type.startsWith("image/") || file.type.startsWith("video/")){
        const fr = new FileReader(); 
        console.log("fr is",fr)
        fr.readAsDataURL(file);  
        fr.onloadend =()=>{
            console.log(fr.result)  ; 
                if(file.type.startsWith("image/")) {setImageUrl(fr.result); setVideoUrl(null);  }
            if(file.type.startsWith("video/")) {setVideoUrl(fr.result); setImageUrl(null);   }
           
        }  
        console.log("url is ",videoUrl)        
     }else{
        toast.error("file not supported");
        setImageUrl(null);
     }
 }
return {handleSendImg,imageUrl,setImageUrl,setVideoUrl,videoUrl}
}


export default useHandleSendImg
