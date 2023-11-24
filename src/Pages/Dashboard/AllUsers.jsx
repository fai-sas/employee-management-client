/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import useGetUsers from '../../Hooks/useGetUsers'

const AllUsers = () => {
  const [users, loading, refetch] = useGetUsers()
  console.log(users)

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Get All Users</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user?._id}>
              <h1>User Length: {users.length}</h1>
              <h1>Name: {user?.name}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AllUsers
