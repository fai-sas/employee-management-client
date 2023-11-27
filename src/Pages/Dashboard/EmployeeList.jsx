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

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('https://employee-management-server-liard.vercel.app/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
  }, [])

  // const handleToggleVerification = async (employeeId, isVerified) => {
  //   try {
  //     const response = await axiosSecure.patch(`/employees/${employeeId}`, {
  //       isVerified: !isVerified,
  //     })

  //     if (response.data.modifiedCount > 0) {
  //       console.log(response.data)

  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: `Employee is verified.`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       })

  //       const remaining = employees.filter(
  //         (booking) => booking._id !== employeeId
  //       )
  //       const updated = employees.find(
  //         (employees) => employees._id === employeeId
  //       )
  //       updated.status = isVerified
  //       const updatedEmployees = [updated, ...remaining]
  //       setEmployees(updatedEmployees)
  //     }
  //   } catch (error) {
  //     console.error('Error updating verification status', error)
  //   }
  // }

  const handleToggleVerification = async (employeeId, isVerified) => {
    try {
      const response = await axiosSecure.patch(`/employees/${employeeId}`, {
        isVerified: !isVerified,
      })

      if (response.data.modifiedCount > 0) {
        console.log(response.data)

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Employee is verified.`,
          showConfirmButton: false,
          timer: 1500,
        })

        setEmployees((prevEmployees) => {
          return prevEmployees.map((employee) => {
            if (employee._id === employeeId) {
              return {
                ...employee,
                status: isVerified,
              }
            }
            return employee
          })
        })
      }
    } catch (error) {
      console.error('Error updating verification status', error)
    }
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
