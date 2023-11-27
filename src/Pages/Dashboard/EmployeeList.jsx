/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2'
import TableEmployeeList from '../../Components/Table/HR/TableEmployeeList'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { useEffect, useState } from 'react'
import useGetEmployees from '../../Hooks/useGetEmployees'

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure()
  const [employees, loading, refetch] = useGetEmployees()
  console.log(employees)

  const handleToggleVerification = async (employeeId, isVerified) => {
    if (loading) return

    try {
      const response = await axiosSecure.patch(`/employees/${employeeId}`, {
        isVerified: !isVerified,
      })

      if (response.data.modifiedCount > 0) {
        const updatedEmployee = employees.find(
          (employee) => employee._id === employeeId
        )
        const employeeName = updatedEmployee ? updatedEmployee.name : ''
        const alertText = isVerified ? 'Unverified' : 'Verified'

        refetch()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${employeeName} is ${alertText}`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.error('Error updating verification status', error)
    }
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Employee List</h1>

      <TableEmployeeList
        employees={employees}
        handleToggleVerification={handleToggleVerification}
      />
    </>
  )
}

export default EmployeeList
