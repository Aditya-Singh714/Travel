import React, {useState} from 'react'
import './Navbar.css'

import {AiFillCloseCircle, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  const[active, setActive] = useState('menuDiv')

  const showNavbar = () =>{
    setActive('menuDiv activeNavbar') 
  }

  const removeNavbar = ()=>{
    setActive('menuDiv')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>

        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Contact Us</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">Pages</a>
            </li>

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
             <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div className="socialIcon flex">
          <BsFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        <div onClick={showNavbar} className="toogleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
