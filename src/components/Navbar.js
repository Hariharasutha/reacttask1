import React from 'react'
import Logo from "../assets/pizzaLogo.png"
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu"> Menu </NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          

        </div>

    </div>
      

  )
}

export default Navbar