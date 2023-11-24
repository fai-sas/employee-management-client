/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa'

import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin'

const Dashboard = () => {
  const [isAdmin] = useAdmin()

  return (
    <div className='flex'>
      {/* dashboard side bar */}
      <div className='w-64 min-h-screen bg-gray-500'>
        <ul className='p-4 menu'>
          {isAdmin ? (
            <>
              <li>
                <NavLink to='/dashboard' className='flex items-center gap-2'>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/dashboard/all-users'
                  className='flex items-center gap-2'
                >
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to='/dashboard/hrHome'
                  className='flex items-center gap-2'
                >
                  <FaHome></FaHome>
                  HR Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard/employee-list'
                  className='flex items-center gap-2'
                >
                  <FaCalendar></FaCalendar>
                  Employee List
                </NavLink>
              </li>
              <li></li>

              <li>
                <NavLink
                  to='/dashboard/progress'
                  className='flex items-center gap-2'
                >
                  <FaList></FaList>
                  Progress
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className='divider'></div>
          <li>
            <NavLink to='/' className='flex items-center gap-2'>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
