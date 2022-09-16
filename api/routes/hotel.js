import express from "express";
import Hotel from "../models/Hotel.js";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
   
    getHotels,
    updateHotel,
  } from "../booking_utils/hotel.js";
//create
const router=express.Router();
//  router.post("/",async (req,res)=>{
// const newHotel=new Hotel(req.body) 
//     try {
//     const savedHotel=await newHotel.save()
//     res.status(200).json(savedHotel)
// } catch (err) {
//     res.status(500).json(err)
// }
//  })
// //update
//  router.put("/:id",async (req,res)=>{
 
//         try {
//         const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//         res.status(200).json(updatedHotel)
//     } catch (err) {
//         res.status(500).json(err)
//     }
//      })
//      //delete
//      router.delete("/:id",async (req,res)=>{
 
//         try {
//         await Hotel.findByIdAndDelete(req.params.id)
//         res.status(200).json("hotel has been deleted");
//     } catch (err) {
//         res.status(500).json(err)
//     }
//      })
//      //get
//      router.get("/:id",async (req,res)=>{
 
//         try {
//         const hotel=await Hotel.findById(req.params.id)
//         res.status(200).json(hotel);
//     } catch (err) {
//         res.status(500).json(err)
//     }
//      })
//      //get all
//      router.get("/",async (req,res)=>{
 
//         try {
//         const hotels=await Hotel.find(req.params.id)
//         res.status(200).json(hotels);
//     } catch (err) {
//         res.status(500).json(err)
//     }
//      })
//CREATE
router.post("/",  createHotel);

//UPDATE
router.put("/:id",  updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
export default router;