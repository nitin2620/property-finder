import express from "express";
import User from "../models/User.js";
import { verifyToken } from "../booking_utils/verifyToken.js";
import {
        deleteUser,
    getUser,
   
    getUsers,
    updateUser,
  } from "../booking_utils/user.js";


const router=express.Router();

//VERIFY
router.get("/authentication",verifyToken,(req,res,next)=>{
res.send("hello user you are logged in")
})


//UPDATE
router.put("/:id",  updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET

router.get("/:id", getUser);
//GET ALL

router.get("/", getUsers);
export default router;