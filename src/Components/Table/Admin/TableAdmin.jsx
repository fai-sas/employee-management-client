/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

const TableAdmin = ({ users, handleMakeHR, handleFireEmployee }) => {
  return (
    <>
      <div className='m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md'>
        <>
          <table className='w-full text-sm text-left text-gray-500 bg-white border-collapse'>
            <thead className='text-center bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>

                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Designation
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Make HR
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Fire
                </th>
              </tr>
            </thead>

            {users.map((user) => {
              return (
                <>
                  <tbody
                    key={user?._id}
                    className='text-center border-t border-gray-100 divide-y divide-gray-100'
                  >
                    <tr className='hover:bg-gray-50'>
                      <td className='px-6 py-4 capitalize'>{user?.name}</td>

                      <td className='px-6 py-4 capitalize'>
                        {user?.designation}
                      </td>

                      <td className='px-6 py-4'>
                        {/* Make HR Button */}
                        {!user.isFired && user.role === 'employee' && (
                          <div className='flex flex-wrap justify-center gap-6'>
                            <button
                              onClick={() =>
                                handleMakeHR(
                                  user?._id,
                                  user?.role,
                                  user?.isVerified
                                )
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
                      </td>

                      {/* fire */}
                      <td className='px-6 py-4'>
                        {user.isFired ? (
                          <span className='p-2 font-semibold text-gray-200 transition-all bg-red-800 rounded-lg hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px'>
                            Fired
                          </span>
                        ) : (
                          <div className='flex flex-wrap justify-center gap-6'>
                            <button
                              onClick={() => handleFireEmployee(user._id)}
                              className='relative'
                            >
                              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded'></span>
                              <span className='relative inline-block w-full h-full px-3 py-1 text-base font-bold text-gray-700 transition duration-100 bg-red-400 border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent'>
                                Fire
                              </span>
                            </button>
                          </div>
                        )}
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

export default TableAdmin
