import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./login.css"

export default function Login() {
    const [credential,setcredential]=useState({
        username:undefined,
        password:undefined
    })
    const navigate=useNavigate();
    const {user,loading,error,dispatch}=useContext(AuthContext)
    const handlechange=(e)=>{
    setcredential(prev=>({...prev,[e.target.id]:e.target.value})
    )
    }
    const handleclick=async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res=await axios.post("/auth/login",credential)
            console.log(res.data)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            navigate("/")
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",payload:error.response.data});
        }
    }
    console.log(user);
  return (
//    <div className='login'>
//     <div className='lcontainer'>
//     <input type="text" placeholder="username" id="username" onChange={handlechange} className="linput"/> 
//     <input type="text" placeholder="password" id="password" onChange={handlechange} className="linput"/>
//     <button onClick={handleclick}>login</button>
//     {error&&<span>{error.message}</span>}
//     </div>
//    </div>
//   )
<div className="login">
<div className="lContainer">
  <input
    type="text"
    placeholder="username"
    id="username"
    onChange={handlechange}
    className="lInput"
  />
  <input
    type="password"
    placeholder="password"
    id="password"
    onChange={handlechange}
    className="lInput"
  />
  <button disabled={loading} onClick={handleclick} className="lButton">
    Login
  </button>
  {error && <span>{error.message}</span>}
</div>
</div>
);
}
