/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import TableTasks from '../../Components/Table/Employee/TableTasks'
import useGetTasks from '../../Hooks/useGetTasks'

const WorkSheet = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [tasks, loading, refetch] = useGetTasks()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const tasks = {
      task: data.task,
      hoursWorked: data.hoursWorked,
      date: data.date,
      employeeName: user.displayName,
      email: user.email,
      userId: user.uid,
    }

    try {
      console.log(tasks)
      axiosSecure.post('/tasks', tasks).then((res) => {
        if (res.data.insertedId) {
          refetch()
          console.log('task added to the database')
          reset()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Work Sheet</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <section className='flex gap-4 py-4 bg-white rounded-lg '>
          {/* Task */}
          <div className='relative bg-inherit'>
            <select
              name='task'
              required
              {...register('task', { required: true })}
              className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
            >
              {/* <option>Select hours worked</option> */}
              <option value='sales'>Sales</option>
              <option value='support'>Support</option>
              <option value='content'>Content</option>
              <option value='marketing'>Marketing</option>
              <option value='paperWork'>Paper Work</option>
            </select>
            <label
              htmlFor='task'
              className='absolute left-0 px-1 mx-1 text-sm text-gray-500 transition-all cursor-text -top-3 bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm'
            >
              Task
            </label>
          </div>
          {/* End of Task */}

          {/* Hours Worked */}
          <div className='relative bg-inherit'>
            <input
              type='number'
              name='hoursWorked'
              required
              {...register('hoursWorked', { required: true })}
              className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
              placeholder='Hours'
            />

            <label
              htmlFor='hoursWorked'
              className='absolute left-0 px-1 mx-1 text-sm text-gray-500 transition-all cursor-text -top-3 bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm'
            >
              Hours Worked
            </label>
          </div>
          {/* End of Hours Worked */}
          {/* Date */}
          <div className='relative bg-inherit'>
            <input
              type='date'
              name='date'
              required
              {...register('date', { required: true })}
              className='h-10 px-2 font-semibold text-gray-800 placeholder-transparent bg-transparent rounded-lg peer ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600'
              placeholder='Date'
            />
            <label
              htmlFor='date'
              className='absolute left-0 px-1 mx-1 text-sm text-gray-500 transition-all cursor-text -top-3 bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm'
            >
              Date
            </label>
          </div>
          {/* End of Date */}
          <button className='px-4 py-2 font-medium text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-600'>
            Submit
          </button>
        </section>
      </form>

      <TableTasks tasks={tasks} />
    </>
  )
}

export default WorkSheet
