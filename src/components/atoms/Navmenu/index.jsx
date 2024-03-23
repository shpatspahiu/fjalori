import React, { useState } from 'react'
import './Navmenu.scss'

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
          <div className='option'>Home</div>
        </div>
      )}
    </div>
  )
}

export default Navmenu
