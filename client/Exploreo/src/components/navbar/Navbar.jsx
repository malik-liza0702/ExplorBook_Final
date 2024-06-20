import { useContext } from "react"
import "./Navbar.css"
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user} = useContext(AuthContext)
  console.log(user);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link>
        <span className="logo">ExplorBook</span>
        </Link>
        
        {user ? user.username:(<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>)}
        
        
      </div>
    </div>
  )
}

export default Navbar