import react from "react";
import { Link } from "react-router-dom";
const Nav=()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
       
        <Link to="/" className="nav-link"> Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/adddoctor" className="nav-link">Add Doctor</Link>
      </li>
      <li className="nav-item">
        <Link to="/addlead" className="nav-link">Add Lead</Link>
      </li>
      <li className="nav-item">
        <Link to="/leadlist" className="nav-link">Lead List</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/registration" className="nav-link">Registration</Link>
      </li>
      <li className="nav-item">
        <Link to="/logout" className="nav-link">Logout</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav;