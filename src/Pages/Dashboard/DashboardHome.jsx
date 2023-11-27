/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import useAdmin from '../../Hooks/useAdmin'
import useHR from '../../Hooks/useHR'
import useEmployee from '../../Hooks/useEmployee'
import { toast } from 'react-toastify'

const DashboardHome = () => {
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()
  const [isHR] = useHR()
  const [isEmployee] = useEmployee()

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(`Logged Out Successfully`))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <section className='container p-8 mx-auto'>
        {/* name */}
        <div className='flex flex-col items-center gap-4'>
          <div className='relative my-4'>
            <div className='absolute -inset-2'>
              <div className='h-full max-w-sm mx-auto w-28 lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600'></div>
            </div>
            <img
              src={user?.photoURL}
              className='relative z-10 object-cover shrink-0 h-28 w-28 rounded-xl'
            />
          </div>

          <p className='text-2xl font-bold'>Welcome {user?.displayName}</p>
        </div>

        <article className='flex items-center justify-center mx-auto'>
          <div className='py-3 mx-auto border-gray-200 border-y-2 '>
            <div className='flex gap-4'>
              <Link
                to='/'
                className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
              >
                Back Home
              </Link>
            </div>
          </div>

          {/*  */}

          <div className='py-3 mx-auto border-gray-200 border-y-2 '>
            <button onClick={handleLogOut} className='flex gap-4'>
              <Link
                to=''
                className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
              >
                Log Out
              </Link>
            </button>
          </div>
        </article>
        {/* end of name */}

        {/*  */}
        {isAdmin ? (
          <>
            <article className='flex flex-wrap items-center justify-center gap-4 py-8'>
              <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
                <div className='flex gap-4'>
                  <Link
                    to='/dashboard/all-users'
                    className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
                  >
                    View All Users
                  </Link>
                </div>
              </div>
            </article>
          </>
        ) : isHR ? (
          <>
            <article className='flex flex-wrap items-center justify-center gap-4 py-8'>
              <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
                <div className='flex gap-4'>
                  <Link
                    to='/dashboard/employee-list'
                    className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
                  >
                    View All Employees
                  </Link>
                </div>
              </div>

              <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
                <div className='flex gap-4'>
                  <Link
                    to='/dashboard/progress'
                    className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
                  >
                    View Progress
                  </Link>
                </div>
              </div>
            </article>
          </>
        ) : isEmployee ? (
          <article className='flex flex-wrap items-center justify-center gap-4 py-8'>
            <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
              <div className='flex gap-4'>
                <Link
                  to='/dashboard/payment-history'
                  className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
                >
                  View Payment History
                </Link>
              </div>
            </div>

            <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
              <div className='flex gap-4'>
                <Link
                  to='/dashboard/work-sheet'
                  className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
                >
                  View Work Sheet
                </Link>
              </div>
            </div>
          </article>
        ) : (
          <div className='py-3 border-y-2 border-gray-200 max-w-[200px]'>
            <div className='flex gap-4'>
              <Link
                to='/'
                className='flex flex-col gap-1 font-semibold text-black hover:text-blue-600'
              >
                Back Home
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default DashboardHome
