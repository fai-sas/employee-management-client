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
import useHR from '../Hooks/useHR'
import useEmployee from '../Hooks/useEmployee'

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isHR] = useHR()
  const [isEmployee] = useEmployee()

  return (
    <div className='flex'>
      {/* dashboard side bar */}
      <div className='w-64 min-h-screen bg-gray-500'>
        <ul className='p-4 menu'>
          {isAdmin ? (
            <>
              {/* <li>
                <NavLink to='/dashboard' className='flex items-center gap-2'>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li> */}

              <li>
                <NavLink
                  to='/dashboard/all-users'
                  className='flex items-center gap-2'
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : isHR ? (
            <>
              {/* <li>
                <NavLink
                  to='/dashboard/hrHome'
                  className='flex items-center gap-2'
                >
                  <FaHome />
                  HR Home
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to='/dashboard/employee-list'
                  className='flex items-center gap-2'
                >
                  <FaCalendar></FaCalendar>
                  Employee List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard/progress'
                  className='flex items-center gap-2'
                >
                  <FaList />
                  Progress
                </NavLink>
              </li>
            </>
          ) : isEmployee ? (
            <>
              <li>
                <NavLink
                  to='/dashboard/payment-history'
                  className='flex items-center gap-2'
                >
                  <FaList />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard/work-sheet'
                  className='flex items-center gap-2'
                >
                  <FaList />
                  Work Sheet
                </NavLink>
              </li>
            </>
          ) : null}
          {/* shared nav links */}
          <div className='divider'></div>
          <li>
            <NavLink to='/' className='flex items-center gap-2'>
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className='flex-1 p-8'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
