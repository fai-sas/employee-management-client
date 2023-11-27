/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import AvatarMenu from './AvatarMenu'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Navbar = () => {
  const { user } = useAuth()
  const [state, setState] = useState(false)
  const navigation = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Contact Us', path: '/contact' },
    !user && { title: 'Login', path: '/login' },
    // user && { title: `${user?.displayName}` },
  ].filter(Boolean)

  return (
    <header className='sticky top-0 z-50 bg-opacity-80 backdrop-filter backdrop-blur-sm'>
      <div className='items-center max-w-screen-xl px-4 mx-auto gap-x-14 lg:flex lg:px-8'>
        <div className='flex items-center justify-between py-3 lg:py-5 lg:block'>
          <Link to='/'>
            <img
              src='https://i.ibb.co/sFsCmwx/jobsy-logo.png'
              width={120}
              height={50}
              alt='Jobsy logo'
            />
          </Link>
          <div className='lg:hidden'>
            <button
              className='text-gray-500 hover:text-gray-800'
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu  flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? '' : 'hidden'
          }`}
        >
          <ul className='items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0'>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='items-center justify-center flex-1 pb-4 lg:flex lg:pb-0'
            ></form>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className='block text-gray-700 hover:text-gray-900'
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            {user && <AvatarMenu />}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
