import {toast} from "react-hot-toast"
function handleInputError({fullName,userName,password,confirmPassword,gender},action){
    if(action == "signup"){
        if(!fullName || !userName || !password || !confirmPassword || !gender){
            toast.error("please fill all the fields");
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
    if(action ="login"){
        if(!userName || !password) {
            toast.error("please fill all the fields")
            return false
        }
        return true
    }
}
export default handleInputError