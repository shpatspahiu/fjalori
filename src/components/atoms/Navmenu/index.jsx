import React, { useEffect, useRef, useState } from 'react'
import './Navmenu.scss'
import { Link } from 'react-router-dom'

const Navmenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    // eslint-disable-next-line
    const handleTouchOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    // TODO: Test on mobile, if needed, uncomment
    // document.addEventListener('touchstart', handleTouchOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)

      // TODO: Test on mobile, if needed, uncomment
      // document.removeEventListener('touchstart', handleTouchOutside)
    }
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div ref={dropdownRef} className='navmenu'>
      <div onClick={toggleMenu} className='menu'>
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
          <Link to='/' onClick={toggleMenu}>
            <div className='option'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
                <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
              </svg>
              Te shpija!
            </div>
          </Link>
          <Link to='/about' onClick={toggleMenu}>
            <div className='option'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z' />
                <path d='M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z' />
                <path d='M5 8h4' />
                <path d='M9 16h4' />
                <path d='M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z' />
                <path d='M14 9l4 -1' />
                <path d='M16 16l3.923 -.98' />
              </svg>
              Cka o ky sen?
            </div>
          </Link>
          <Link to='/new-word' onClick={toggleMenu}>
            <div className='option'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
                <path d='M15 12h-6' />
                <path d='M12 9v6' />
              </svg>
              Shto definicion...
            </div>
          </Link>
          <Link to='login'>
            <div className='option'>Login</div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navmenu
