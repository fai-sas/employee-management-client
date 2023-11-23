/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div
        className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate state={location.pathname} to='/login' replace></Navigate>
}
export default PrivateRoute
