import React from 'react'
import Navbar from '../../molecules/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default LayoutClient
