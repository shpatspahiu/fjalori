import React, { useState } from 'react'
import './Navmenu.scss'
import { Link } from 'react-router-dom'

const Navmenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='navmenu'>
      <div onClick={handleMenuClick} className='menu'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l16 0' />
          <path d='M4 12l16 0' />
          <path d='M4 18l16 0' />
        </svg>
      </div>

      {showMenu && (
        <div className='option-container'>
          <Link to='/'>
            <div className='option'>Te shpija!</div>
          </Link>
          <Link to='/about'>
            <div className='option'>Cka o ky sen?</div>
          </Link>
          <Link to='/new-word'>
            <div className='option'>Shto definicion...</div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navmenu
