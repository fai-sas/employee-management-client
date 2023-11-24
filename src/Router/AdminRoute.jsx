/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import useAdmin from '../Hooks/useAdmin'

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <h1>Loading</h1>
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default AdminRoute
