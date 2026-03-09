import jwt from "jsonwebtoken"

const genToken = async (userID) =>{
    try {
        const token = await jwt.sign({userID},process.env.JWT_SECRET,{expireIn:"7d"})
        
    } catch (error) {
        
    }
}