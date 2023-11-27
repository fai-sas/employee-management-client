/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom'
import EmployeeChart from '../../Components/EmployeeChart'

const SingleEmployee = () => {
  const { name, designation, email, photoURL, salary, _id } = useLoaderData()

  return (
    <>
      <section>
        <div className='flex items-center justify-center gap-6 dark:bg-slate-800'>
          <div className='relative p-5 overflow-hidden transition-all duration-500 transform bg-gray-100 shadow-xl dark:bg-gray-700 hover:shadow-2xl group rounded-xl'>
            <div className='flex items-center gap-4'>
              <img
                src={photoURL}
                className='object-cover object-center w-32 h-32 transition-all duration-500 delay-500 transform rounded-full group-hover:w-36 group-hover:h-36'
              />
              <div className='transition-all duration-500 transform w-fit'>
                <h1 className='font-bold text-gray-600 dark:text-gray-200'>
                  {name}
                </h1>
                <p className='text-gray-400'>{designation}</p>
                <a className='text-xs text-gray-500 transition-all duration-500 delay-300 transform opacity-0 dark:text-gray-200 group-hover:opacity-100'>
                  {email}
                </a>
              </div>
            </div>
            <div className='absolute transition-all duration-500 delay-300 bg-gray-600 rounded-lg group-hover:bottom-1 -bottom-16 dark:bg-gray-100 right-1'></div>
          </div>
        </div>
      </section>
      <EmployeeChart salary={salary} />
    </>
  )
}

export default SingleEmployee
