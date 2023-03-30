import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/gallery"> Gallery</Link>
            <Link to="/PlayGround"> PlayGround</Link>
        </div>
    </div>
  )
}

export default Navbar