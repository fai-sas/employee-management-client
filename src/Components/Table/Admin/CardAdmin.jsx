/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react'

const CardAdmin = ({ users, handleMakeHR, handleFireEmployee }) => {
  console.log(users)

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
      {users.map((user) => (
        <Card key={user.id} className='w-full '>
          <CardHeader floated={false} className='h-80'>
            <img
              src={user?.photoURL}
              alt='profile-picture'
              className='object-cover w-full'
            />
          </CardHeader>
          <CardBody className='text-center'>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              {user?.name}
            </Typography>
            <Typography color='blue-gray' className='font-medium' textGradient>
              {user?.designation}
            </Typography>
          </CardBody>
          <CardFooter className='flex justify-center pt-2 gap-7'>
            {/* Make HR Button */}
            {!user.isFired && user.role === 'employee' && (
              <div className='flex flex-wrap justify-center gap-6'>
                <button
                  onClick={() =>
                    handleMakeHR(user?._id, user?.role, user?.isVerified)
                  }
                  className='relative'
                >
                  <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded'></span>
                  <span className='relative inline-block w-full h-full px-3 py-1 text-base font-bold text-black transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent'>
                    Make HR
                  </span>
                </button>
              </div>
            )}

            {/* HR Status */}
            {user.role === 'hr' && !user.isFired && (
              <span className='px-4 py-2 text-gray-200 bg-gray-800 rounded-xl'>
                The User is HR
              </span>
            )}

            {/* Fired Status */}
            {user.isFired && (
              <span className='px-4 py-2 font-bold text-red-600'>
                The Employee is Fired
              </span>
            )}

            {/* Fire Button */}
            {!user.isFired && (
              <div className='flex flex-wrap justify-center gap-6'>
                <button
                  onClick={() => handleFireEmployee(user._id)}
                  className='relative'
                >
                  <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded'></span>
                  <span className='relative inline-block w-full h-full px-3 py-1 text-base font-bold text-gray-300 transition duration-100 bg-red-600 border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent'>
                    Fire
                  </span>
                </button>
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardAdmin
