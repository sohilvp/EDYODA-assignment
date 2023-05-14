import React from 'react'
import './navbar.css'
import {BsChevronDown} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../../asset/EDYODA.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="left-section">
            <ul>
                <li><img src={logo} alt="logo" /></li>
                <li>Courses <BsChevronDown/></li>
                <li>Programs <BsChevronDown/></li>
            </ul>
        </div>
        <div className="right-section">
            
            <ul>
                <li><AiOutlineSearch style={{fontSize:"1.4rem"}}/></li>
                <li>Log In</li>
                <li>Join Now</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar