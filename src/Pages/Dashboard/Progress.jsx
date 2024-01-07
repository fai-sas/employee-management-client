/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import moment from 'moment/moment'
import { useEffect, useState } from 'react'

const Progress = () => {
  const [tasks, setTasks] = useState([])
  const [uniqueNames, setUniqueNames] = useState([])
  const [uniqueMonths, setUniqueMonths] = useState([])
  const [selectedName, setSelectedName] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')

  useEffect(() => {
    fetch('https://employee-management-server-liard.vercel.app/tasks')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data)
        setUniqueNames(filterUniqueNames(data))
        setUniqueMonths(filterUniqueMonths(data))
      })
  }, [])

  const filterUniqueNames = (tasks) => {
    const uniqueNamesSet = new Set(tasks.map((task) => task.employeeName))
    return Array.from(uniqueNamesSet).map((name) => ({ employeeName: name }))
  }

  const filterUniqueMonths = (tasks) => {
    const uniqueMonthsSet = new Set(
      tasks.map((task) => moment(task.date).format('MMMM'))
    )
    return Array.from(uniqueMonthsSet).map((month) => ({ month }))
  }

  const filteredTasks = tasks.filter(
    (task) =>
      (!selectedName || task.employeeName === selectedName) &&
      (!selectedMonth || moment(task.date).format('MMMM') === selectedMonth)
  )

  const totalHoursWorked = filteredTasks.reduce(
    (total, task) => total + (parseFloat(task.hoursWorked) || 0),
    0
  )

  return (
    <>
      <article className='flex gap-4 py-4 mx-8 text-2xl font-bold'>
        <h1>Progress Report</h1>
      </article>

      <div className='mb-4 text-center'>
        <p className='text-xl font-bold'>
          Total Hours Worked: {totalHoursWorked} hours
        </p>
      </div>

      <section className='flex gap-4 py-4 mx-8 bg-white rounded-lg '>
        {/* Select for Names */}
        <div className='relative bg-inherit'>
          <select
            name='Name'
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
          >
            <option value='' disabled>
              Filter by Name
            </option>
            <option value=''>All Names</option>
            {uniqueNames.map((task, index) => (
              <option key={index} value={task?.employeeName}>
                {task.employeeName}
              </option>
            ))}
          </select>
        </div>

        {/* Select for Unique Months */}
        <div className='relative bg-inherit'>
          <select
            name='Month'
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
          >
            <option value='' disabled>
              Filter by Month
            </option>
            <option value=''>All Months</option>
            {uniqueMonths.map((month, index) => (
              <option key={index} value={month?.month}>
                {month.month}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className='m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md'>
        {filteredTasks.length > 0 ? (
          <table className='w-full text-sm text-left text-gray-800 bg-white border-collapse lg:text-lg'>
            {/* ... (table header) */}
            <thead className='font-bold text-center bg-gray-200 shadow-md'>
              <tr className='text-lg font-extrabold'>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Task
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Hours Worked
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Month
                </th>
              </tr>
            </thead>

            {/* Display rows */}
            {filteredTasks.map((task) => {
              const formattedMonth = moment(task?.date).format('MMMM')

              return (
                <tbody
                  key={task?._id}
                  className='text-center border-t border-gray-100 divide-y divide-gray-100'
                >
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 capitalize'>
                      {task?.employeeName}
                    </td>
                    <td className='px-6 py-4 capitalize'>{task?.task}</td>
                    <td className='px-6 py-4'>{task?.hoursWorked}</td>
                    <td className='px-6 py-4'>{formattedMonth}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        ) : (
          <p className='p-4 text-2xl font-bold text-center'>No data found</p>
        )}
      </div>
    </>
  )
}

export default Progress
