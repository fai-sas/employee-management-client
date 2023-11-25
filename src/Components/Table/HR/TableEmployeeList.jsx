/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { TiDelete } from 'react-icons/ti'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import useGetAllEmployees from '../../../Hooks/useGetAllEmployees'
import { Link } from 'react-router-dom'

const TableEmployeeList = ({ employees, handleToggleVerification }) => {
  return (
    <>
      <div className='m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md'>
        <>
          <table className='w-full text-sm text-left text-gray-500 bg-white border-collapse'>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Verified
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Bank Account
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Salary
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Details
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Pay
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900'
                ></th>
              </tr>
            </thead>

            {employees.map((employee) => {
              return (
                <>
                  <tbody
                    key={employee?._id}
                    className='border-t border-gray-100 divide-y divide-gray-100'
                  >
                    <tr className='hover:bg-gray-50'>
                      <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                        <div className='relative w-10 h-10'>
                          <img
                            className='object-cover object-center w-full h-full rounded-full'
                            src={employee?.displayURL}
                            alt=''
                          />
                          <span className='absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white'></span>
                        </div>
                        <div className='text-sm'>
                          <div className='font-medium text-gray-700'>
                            {employee?.name}
                          </div>
                          <div className='text-gray-400'>{employee?.email}</div>
                        </div>
                      </th>

                      <td className='px-6 py-4'>
                        <button
                          onClick={() =>
                            handleToggleVerification(
                              employee?._id,
                              employee?.isVerified
                            )
                          }
                          className={`inline-flex items-center gap-1 px-2 py-1 font-semibold rounded-full 
                          }`}
                        >
                          {employee.isVerified ? <FaCheck /> : <TiDelete />}
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        {employee?.bank_account_number}
                      </td>
                      <td className='px-6 py-4'>{employee?.salary}</td>
                      <td className='px-6 py-4'>
                        <Link
                          to={`/dashboard/employee-list/singleEmployee/${employee?._id}`}
                        >
                          View Details
                        </Link>
                      </td>
                      <td className='px-6 py-4'>Pay Now</td>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </table>
        </>
      </div>
    </>
  )
}

export default TableEmployeeList
