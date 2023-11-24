/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import TableEmployeeList from '../../Components/Table/HR/TableEmployeeList'
import useGetAllEmployees from '../../Hooks/useGetAllEmployees'

const EmployeeList = () => {
  const [employees, loading, refetch] = useGetAllEmployees()

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Get All Users</h1>
      <TableEmployeeList employees={employees} />
    </>
  )
}

export default EmployeeList
