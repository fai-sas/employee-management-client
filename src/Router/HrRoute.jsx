/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import useHR from '../Hooks/useHR'

const HrRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isHR, isHRLoading] = useHR()
  const location = useLocation()

  if (loading || isHRLoading) {
    return <h1>Loading</h1>
  }

  if (user && isHR) {
    return children
  }

  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default HrRoute
