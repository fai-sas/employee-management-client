/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2'
import TableAdmin from '../../Components/Table/Admin/TableAdmin'
import useGetUsers from '../../Hooks/useGetUsers'
import useAxiosSecure from '../../Hooks/useAxiosSecure'

const AllUsers = () => {
  const [users, loading, refetch] = useGetUsers()
  const axiosSecure = useAxiosSecure()

  if (loading) {
    return <h1>Loading...</h1>
  }

  const filteredUsers = users.filter(
    (user) =>
      user?.role === 'hr' || (user?.role === 'employee' && user?.isVerified)
  )

  const handleMakeHR = async (employeeId, role) => {
    if (loading) return

    try {
      const response = await axiosSecure.patch(`/users/${employeeId}`, {
        role: 'hr',
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

  return (
    <>
      <h1 className='py-4 text-3xl font-semibold'>
        List of Verified Employees and HR
      </h1>
      <div className=''>
        <TableAdmin users={filteredUsers} handleMakeHR={handleMakeHR} />
      </div>
    </>
  )
}

export default AllUsers
