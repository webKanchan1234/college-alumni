const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken")
const User =require("../model/userModel");
const { use } = require("../app");


exports.isAuthenticated = asyncHandler(async (req, res, next) => {
    const { token } = req.cookies
    // console.log(token)
    if (!token) {
        return next(new ErrorHandler("Please Login to access this resourses"))
    }
    
    const decodeData = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decodeData.id);
    // console.log(req.user)
    next();
})

exports.isAuthorised=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler("You are not authorised to acces this resourse",403))
        }
        next()
    }
   
}