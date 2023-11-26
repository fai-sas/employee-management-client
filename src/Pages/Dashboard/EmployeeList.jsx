/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2'
import TableEmployeeList from '../../Components/Table/HR/TableEmployeeList'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import useGetAllEmployees from '../../Hooks/useGetAllEmployees'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure()
  // const [loading, refetch] = useGetAllEmployees()

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
  }, [])

  const handleToggleVerification = async (employeeId, isVerified) => {
    // if (loading) return

    try {
      const response = await axiosSecure.patch(`/employees/${employeeId}`, {
        isVerified: !isVerified,
      })

      if (response.data.modifiedCount > 0) {
        console.log(response.data)
        // refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Employee is verified.`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.error('Error updating verification status', error)
    }
  }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>Get All Users</h1>

      <TableEmployeeList
        employees={employees}
        handleToggleVerification={handleToggleVerification}
      />
    </>
  )
}

export default EmployeeList
