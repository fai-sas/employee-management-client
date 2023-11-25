/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import TableAdmin from '../../Components/Table/Admin/TableAdmin'
import useGetUsers from '../../Hooks/useGetUsers'

const AllUsers = () => {
  const [users, loading, refetch] = useGetUsers()

  if (loading) {
    return <h1>Loading...</h1>
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
      <div className=''>
        <TableAdmin users={filteredUsers} />
      </div>
    </>
  )
}

export default AllUsers
