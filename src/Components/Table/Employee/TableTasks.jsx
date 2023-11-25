/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { TiDelete } from 'react-icons/ti'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const TableTasks = ({ tasks }) => {
  return (
    <>
      <h1>Task Table</h1>

      <div className='m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md'>
        <>
          <table className='w-full text-sm text-left text-gray-500 bg-white border-collapse'>
            <thead className='text-center bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Task
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Hours Worked
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Date
                </th>
              </tr>
            </thead>

            {tasks.map((task) => {
              return (
                <>
                  <tbody
                    key={task?._id}
                    className='text-center border-t border-gray-100 divide-y divide-gray-100'
                  >
                    <tr className='hover:bg-gray-50'>
                      <td className='px-6 py-4 capitalize'>{task?.task}</td>
                      <td className='px-6 py-4'>{task?.hoursWorked}</td>
                      <td className='px-6 py-4'>{task?.date}</td>
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

export default TableTasks
