/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { FaCalendar, FaHome, FaList, FaUsers } from 'react-icons/fa'

import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin'
import useHR from '../Hooks/useHR'
import useEmployee from '../Hooks/useEmployee'

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isHR] = useHR()
  const [isEmployee] = useEmployee()

  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-0 md:flex-row'>
        {/* dashboard side bar */}
        <div className='w-64 ml-16 bg-gray-300 rounded-md shadow-md md:block'>
          <ul className='p-4 space-y-4 menu'>
            {isAdmin ? (
              <>
                <li>
                  <div className='relative'>
                    <div className='absolute -inset-5'>
                      <div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600'></div>
                    </div>
                    <NavLink
                      to='/dashboard'
                      className='relative z-10 inline-flex items-center justify-center w-full gap-2 px-8 py-3 font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                      role='button'
                    >
                      <FaHome />
                      Admin Home
                    </NavLink>
                  </div>
                </li>

                <li>
                  <div className='relative'>
                    <div className='absolute -inset-5'>
                      <div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600'></div>
                    </div>
                    <NavLink
                      to='/dashboard/all-users'
                      className='relative z-10 inline-flex items-center justify-center w-full gap-2 px-8 py-3 font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                      role='button'
                    >
                      <FaUsers />
                      All Users
                    </NavLink>
                  </div>
                </li>
              </>
            ) : isHR ? (
              <>
                <li>
                  <NavLink
                    to='/dashboard'
                    className='flex items-center gap-2 font-bold'
                  >
                    <FaHome />
                    HR Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/employee-list'
                    className='flex items-center gap-2 font-bold'
                  >
                    <FaCalendar></FaCalendar>
                    Employee List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/progress'
                    className='flex items-center gap-2 font-bold'
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
                    to='/dashboard'
                    className='flex items-center gap-2 font-bold'
                  >
                    <FaHome />
                    Employee Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/payment-history'
                    className='flex items-center gap-2 font-bold'
                  >
                    <FaList />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/work-sheet'
                    className='flex items-center gap-2 font-bold'
                  >
                    <FaList />
                    Work Sheet
                  </NavLink>
                </li>
              </>
            ) : null}
            {/* shared nav links */}
            <hr className='w-full border-t-2 border-gray-800' />
            <li>
              <NavLink to='/'>
                <button
                  type='button'
                  className='relative z-10 inline-flex items-center justify-center w-full gap-2 px-8 py-3 font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                >
                  <div className='flex gap-2'>
                    <FaHome />
                    <div className='-mt-1 font-semibold'>Home</div>
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}

        <div className='p-8 md:flex-1'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
