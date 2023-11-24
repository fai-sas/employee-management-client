/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import { toast } from 'react-toastify'

const AvatarMenu = () => {
  const { user, logOut } = useAuth()
  const [state, setState] = useState(false)
  const profileRef = useRef()

  const navigation = [
    // { title: 'Dashboard', path: '/' },
    // { title: 'Analytics', path: '/' },
    // { title: 'Profile', path: '/' },
    // { title: 'Settings', path: '/' },
  ]

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(`Logged Out Successfully`))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])

  return (
    <div className='relative border-t lg:border-none'>
      <div className=''>
        <button
          ref={profileRef}
          className='hidden w-10 h-10 rounded-full outline-none ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block'
          onClick={() => setState(!state)}
        >
          <img
            // src='https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
            src={user?.photoURL}
            className='w-full h-full rounded-full'
          />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? '' : 'lg:hidden'
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <NavLink
              className='block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3'
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <button
          onClick={handleLogOut}
          className='block w-full py-3 text-justify text-gray-600 border-t hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3'
        >
          Logout
        </button>
      </ul>
    </div>
  )
}

export default AvatarMenu
