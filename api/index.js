import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotel.js"
import roomsRoute from "./routes/rooms.js"
import userRoute from "./routes/user.js"
import cookieParser from "cookie-parser"
const app =express()
dotenv.config()
const connect=async()=>{
try {
     mongoose.connect(process.env.MONGO);
    console.log("connected to mongo")
  } catch (error) {
    throw (error);
  }
};
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/hotel",hotelRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/user",userRoute)
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800,()=>{
    connect()
    console.log("connected to backend!")
})