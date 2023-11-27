/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { TiDelete } from 'react-icons/ti'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  DialogBody,
  DialogHeader,
} from '@material-tailwind/react'
import Payment from '../../Payment/Payment'

const TableEmployeeList = ({ employees, handleToggleVerification }) => {
  const [openDialogId, setOpenDialogId] = useState(null)
  const [selectedMonth, setSelectedMonth] = useState('january')
  const [selectedYear, setSelectedYear] = useState('2020')

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value)
  }

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value)
  }

  const handleOpen = (employeeId) => {
    setOpenDialogId(employeeId)
  }

  const handleClose = () => {
    setOpenDialogId(null)
  }

  const handleClickOutside = (e, employeeId) => {
    if (!e.target.closest(`#dialog-body-${employeeId}`)) {
      handleClose()
    }
  }

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

            {employees?.map((employee) => {
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
                            src={employee?.photoURL}
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
                          className={`inline-flex items-center gap-1 px-2 py-1 font-semibold rounded-full  mx-auto
                          }`}
                        >
                          {employee.isVerified ? (
                            <FaCheck className='text-lg font-bold text-green-700 '></FaCheck>
                          ) : (
                            <TiDelete className='text-2xl font-bold text-red-700'></TiDelete>
                          )}
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        {employee?.bank_account_number}
                      </td>
                      <td className='px-6 py-4'>{employee?.salary}</td>
                      <td className='px-6 py-4'>
                        <Link
                          to={`/dashboard/employee-list/singleEmployee/${employee?._id}`}
                          className='p-2 text-gray-200 transition-all bg-gray-800 rounded-lg hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px '
                        >
                          View Details
                        </Link>
                      </td>
                      <td className='px-6 py-4'>
                        <button
                          onClick={() => handleOpen(employee?._id)}
                          className={`p-2 rounded-lg ${
                            employee?.isVerified
                              ? 'text-gray-200 bg-gray-800'
                              : 'text-gray-500 bg-gray-300 cursor-not-allowed'
                          }`}
                          disabled={!employee?.isVerified}
                          title={
                            !employee?.isVerified
                              ? 'Employee needs to be verified to be paid'
                              : ''
                          }
                        >
                          Pay Now
                        </button>
                        {/* <button
                          onClick={() => handleOpen(employee?._id)}
                          className='p-2 text-gray-200 bg-gray-800 rounded-lg'
                          disabled={!employee?.isVerified}
                        >
                          Pay Now
                        </button> */}
                        {openDialogId === employee?._id && (
                          <Dialog
                            size='xs'
                            open={true}
                            handler={handleClose}
                            className='bg-transparent shadow-none'
                          >
                            <Card className='w-full mx-auto'>
                              <CardBody
                                id={`dialog-body-${employee?._id}`}
                                className='flex flex-col gap-4 dialog-body'
                                onClick={(e) =>
                                  handleClickOutside(e, employee?._id)
                                }
                              >
                                <DialogHeader>
                                  <h2>Pay Salary of {employee?.name}</h2>
                                </DialogHeader>

                                <DialogBody className=''>
                                  <h2>Amount : $ {employee?.salary} </h2>
                                  <section className='flex gap-4 py-4 bg-white rounded-lg '>
                                    <div className='relative bg-inherit'>
                                      <select
                                        name='month'
                                        value={selectedMonth}
                                        onChange={handleMonthChange}
                                        className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
                                      >
                                        <option value='january'>January</option>
                                        <option value='february'>
                                          February
                                        </option>
                                        <option value='march'>March</option>
                                        <option value='april'>April</option>
                                        <option value='may'>May</option>
                                        <option value='june'>June</option>
                                        <option value='july'>July</option>
                                        <option value='august'>August</option>
                                        <option value='september'>
                                          September
                                        </option>
                                        <option value='october'>October</option>
                                        <option value='november'>
                                          November
                                        </option>
                                        <option value='december'>
                                          December
                                        </option>
                                      </select>
                                      <label
                                        htmlFor='month'
                                        className='absolute left-0 px-1 mx-1 text-sm text-gray-500 transition-all cursor-text -top-3 bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm'
                                      >
                                        Month
                                      </label>
                                    </div>
                                    <div className='relative bg-inherit'>
                                      <select
                                        name='year'
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
                                      >
                                        <option value='2020'>2020</option>
                                        <option value='2021'>2021</option>
                                        <option value='2022'>2022</option>
                                        <option value='2023'>2023</option>
                                        <option value='2024'>2024</option>
                                      </select>
                                      <label
                                        htmlFor='year'
                                        className='absolute left-0 px-1 mx-1 text-sm text-gray-500 transition-all cursor-text -top-3 bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm'
                                      >
                                        Year
                                      </label>
                                    </div>
                                  </section>
                                  <Payment
                                    employeeId={employee?._id}
                                    employeeName={employee?.name}
                                    amount={employee?.salary}
                                    month={selectedMonth}
                                    year={selectedYear}
                                  />
                                </DialogBody>
                              </CardBody>
                            </Card>
                          </Dialog>
                        )}
                        {/* </Link> */}
                      </td>
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
