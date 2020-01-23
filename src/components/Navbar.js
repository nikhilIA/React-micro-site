import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/oberoi-home-logo.png'


class Navbar extends Component { 
    render() {
        return (
    <div>
   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container">   
    <Link to="#" className="navbar-brand"><img alt="" src={Logo}/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
         <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
               <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/About">About Us</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/Blogs">Blogs</Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
           
         </ul>
        
      </div>

      </div>
   </nav>
</div>
                )
            }
}

export default Navbar;