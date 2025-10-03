
import asyncHandler from "express-async-handler"
import HttpException from "../utils/exceptions/http.exception";
import User from '..models/user.model.js';

const getAllItems = asyncHandler (async(req,res,next)=>{
    const email = req.user.email;
    if(!email){
        next(new HttpException(400,"Email Id not found"));
    }
    const user = await User.findOne({email:email});
    if(!user){
        next(new HttpException(404,"User not found"));   
    }
    
});

export {
    getAllItems,
}