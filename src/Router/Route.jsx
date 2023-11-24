/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import PrivateRoute from '../Router/PrivateRoute'
import Dashboard from '../Layout/DashboardLayout'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AdminRoute from './AdminRoute'
import EmployeeList from '../Pages/Dashboard/EmployeeList'
import HrRoute from './HrRoute'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // admin only routes
      {
        path: '/dashboard/all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      // HR only routes
      {
        path: '/dashboard/employee-list',
        element: (
          <HrRoute>
            <EmployeeList />
          </HrRoute>
        ),
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default Route
