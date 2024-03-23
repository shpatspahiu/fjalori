import React from 'react'
import './Navbar.scss'
import Navmenu from '../../atoms/Navmenu'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Navmenu />
      <div className='app-title'>FjaloriUrban</div>
    </div>
  )
}

export default Navbar
