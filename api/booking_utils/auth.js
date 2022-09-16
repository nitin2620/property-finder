import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "./error.js";
import jwt from"jsonwebtoken"
export const register=async(req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
     
        const newUser=new User({username:req.body.username,
        email:req.body.email,
    password:hash})
    await newUser.save()
    res.status(200).send("user has been created")
    } catch (err) {
        next(err)
    }
}
export const login=async(req,res,next)=>{
    try {
  const user=await User.findOne({username:req.body.username})
  if(!user)return next(createError(404,"user not found"))
    const ispasswordCorrect=await bcrypt.compare(req.body.password,user.password)    
   if(!ispasswordCorrect)return next(createError(400,"password is incorrect"))
   const {password,isAdmin,...others}=user._doc; 
   const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
   res.cookie("access_token",process.env.JWT,{
    httpOnly:true
   }).status(200).json({...others});
    } catch (err) {
        next(err)
    }
}
