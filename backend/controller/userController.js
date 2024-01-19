const User = require("../model/userModel")
const asyncHandler = require('express-async-handler')
const ErrorHandler = require("../utils/errorHandler")
const { json } = require("body-parser")


exports.registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body

    const user = await User.create({
        name,email,password
    })
    const token = user.generateToken();
    const options = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24*60*60*1000
        ),
        httpOnly:true
    }
    res.status(201).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
})

exports.loginUser = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body

    if(email==="" || password===""){
        // const err = new Error()
        // err.statusCode=404
        // err.message="Please enter email or password"
        return next(new ErrorHandler("Please enter email or password",404))
    }
    const user = await User.findOne({email:email})
    if(!user){
        return next(new ErrorHandler("User not exist with this mail id",404))
    }
    

    const isMatchPassword = await user.matchPassword(password)
    if(!isMatchPassword){
        return next(new ErrorHandler("Email or password is invalid",404))
    }
    

    const token = user.generateToken();
    const options = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24*60*60*1000
        ),
        httpOnly:true
    }

    res.status(200).cookie("token",token,options).json({
        status:200,
        user,
        token
    })

})

exports.allUsers = asyncHandler(async(req,res,next)=>{
    const users=await User.find()
    res.status(200).json({
        success:true,
        users
    })
})

exports.userDetails=asyncHandler(async(req,res,next)=>{
    const id=req.user.id
    const user = await User.findById(id)
    if(!user){
        return next(new ErrorHandler("User doesn't exist with id",404))
    }
    res.status(200).json({
        success:true,
        user
    })
})

exports.logoutUser = asyncHandler(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:"Log out successfully"
    })
})

exports.updateUser = asyncHandler(async(req,res,next)=>{
    const updateUser = await User.findByIdAndUpdate(req.user.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        updateUser
    })
})

exports.changePassword = asyncHandler(async(req,res,next)=>{
    const {oldPassword,newPassword,confirmPassword}=req.body
    if(oldPassword===""||newPassword===""||confirmPassword===""){
        return next(new ErrorHandler("All fields are required!"))
    }
    const user=await User.findById(req.user.id)
    const isMatchPassword = await user.matchPassword(oldPassword)
    if(!isMatchPassword){
        return next(new ErrorHandler("Old password is matched"))
    }
    if(newPassword!==confirmPassword){
        return next(new ErrorHandler("new password and confirm password in not same"))
    }
    user.password = newPassword
    user.save()
    res.status(200).json({
        success:true,
        message:"Password update successfully"
    })

})

exports.deleteUser = asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User not found with id",404))
    }
    await user.deleteOne()
    res.status(200).json({
        success:true,
        message:"User deleted successfully"
    })
})

exports.userDetails = asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User not found with id",404))
    }
    res.status(200).json({
        success:true,
        user
    })
})