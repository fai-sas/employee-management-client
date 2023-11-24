/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import useGetAllEmployees from '../../Hooks/useGetAllEmployees'

const EmployeeList = () => {
  const [employees, loading, refetch] = useGetAllEmployees()

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Get All Users</h1>
      <div>
        {employees.map((employee) => {
          return (
            <div key={employee?._id}>
              <h1>User Length: {employees.length}</h1>
              <h1>Name: {employee?.name}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EmployeeList
