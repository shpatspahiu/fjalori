import React from 'react'
import Navbar from '../../molecules/Navbar'
import { Outlet } from 'react-router-dom'
import './LayoutClient.scss'

const LayoutClient = () => {
  return (
    <div className='layoutClient'>
      <Navbar />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutClient
