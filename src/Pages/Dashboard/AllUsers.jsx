/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2'
import TableAdmin from '../../Components/Table/Admin/TableAdmin'
import useGetUsers from '../../Hooks/useGetUsers'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { useState } from 'react'
import CardAdmin from '../../Components/Table/Admin/CardAdmin'

const AllUsers = () => {
  const [view, setView] = useState('table')
  const [users, loading, refetch] = useGetUsers()
  const axiosSecure = useAxiosSecure()

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleMakeHR = async (employeeId, role, isVerified) => {
    if (loading) return

    try {
      const response = await axiosSecure.patch(`/users/${employeeId}`, {
        role: 'hr',
        isVerified: isVerified,
      })

      if (response.data.modifiedCount > 0) {
        console.log(response.data)
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Employee is now an HR`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.error('Error making the user HR', error)
    }
  }

  const handleFireEmployee = async (userId) => {
    if (loading) return

    try {
      const response = await axiosSecure.patch(`/users/fire/${userId}`, {
        isFired: true,
      })

      if (response.data.modifiedCount > 0) {
        console.log(response.data)

        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Employee is now fired`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.error('Error firing the user', error)
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user?.role === 'hr' || (user?.role === 'employee' && user?.isVerified)
  )

  return (
    <>
      <h1 className='py-4 text-3xl font-semibold'>
        List of Verified Employees and HR
      </h1>

      <div className='flex gap-4 transition-opacity '>
        <button
          onClick={() => setView('table')}
          className={`${
            view === 'table'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-300 text-gray-800'
          } py-2 px-4 rounded-lg transition-all duration-300`}
        >
          Table View
        </button>
        <button
          onClick={() => setView('card')}
          className={`${
            view === 'card'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-300 text-gray-800'
          } py-2 px-4 rounded-lg transition-all duration-300`}
        >
          Card View
        </button>
      </div>

      <div
        className={`transition-opacity ${
          view === 'card' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {view === 'table' && (
          <TableAdmin
            users={filteredUsers}
            handleMakeHR={handleMakeHR}
            handleFireEmployee={handleFireEmployee}
          />
        )}
      </div>
      <div
        className={`transition-opacity ${
          view === 'table' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {view === 'card' && (
          <CardAdmin
            users={filteredUsers}
            handleMakeHR={handleMakeHR}
            handleFireEmployee={handleFireEmployee}
          />
        )}
      </div>
    </>
  )
}

export default AllUsers
