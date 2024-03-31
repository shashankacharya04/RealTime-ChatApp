import User from "../models/user.models.js"

export const getUsersForSideBar = async(req,res)=>{
    try{
       const loggedInUser = req.user._id
       const filteredUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password") //$ne :not equal to
       res.status(200).json(
        filteredUsers
       )
    }catch(error){
        console.log("error in getUserForSideBar controller:",error.message)
        res.status(500).json({
            error:"internal server error"
        })
    }

}