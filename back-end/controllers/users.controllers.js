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
export const updatedUser=async(req,res)=>{
    try {
        const {id} = req.params;
const {fullName,password,confirmPassword,profilePic} = req.body;
const user = await User.findById(id);
console.log("user is",user)
// if(user !==null) {
//     return res.status(404).json({
//         error:"user not found"
//     })
// }
if(password !== confirmPassword){
    return res.status(400).json({
        error:"password does not match"
    })
}
const updateuser = await User.findOneAndUpdate({_id:id},{
    $set:{
        fullName,
        password
    },
     upsert:false
})
console.log("user",updateuser)
    } catch (error) {
        console.log("error is",error)
    }
}