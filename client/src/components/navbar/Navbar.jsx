import "./navbar.css"
import {Link, NavLink} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const Navbar = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to ="/" style={{color:"inherit"}}>booking</Link></span>
       { user?user.username:(<div className="navItems">
          <button className="navButton">Register</button>
          <Link to ="/login"><button className="navButton">Login</button></Link>
        </div>)
}
      </div>
    </div>
  )
}

export default Navbar