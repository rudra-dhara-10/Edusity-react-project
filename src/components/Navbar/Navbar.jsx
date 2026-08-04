import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toogleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} duration={500} offset={0} >Home</Link></li>
            <li><Link to='program' smooth={true} duration={500} offset={-260} >Program</Link></li>
            <li><Link to='about' smooth={true} duration={500} offset={-150} >About Us</Link></li>
            <li><Link to='campus' smooth={true} duration={500} offset={-260} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} duration={500} offset={-260} >Testimonials</Link></li>
            <li><Link to='contact' smooth={true} duration={500} offset={-260} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu} />
    </nav>
  )
}

export default Navbar