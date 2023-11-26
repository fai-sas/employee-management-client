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
import SingleEmployee from '../Pages/Dashboard/SingleEmployee'
import PaymentHistory from '../Pages/Dashboard/PaymentHistory'
import WorkSheet from '../Pages/Dashboard/WorkSheet'
import EmployeeRoute from './EmployeeRoute'
import Progress from '../Pages/Dashboard/Progress'
import PayNow from '../Pages/Dashboard/PayNow'

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
      {
        path: '/dashboard/pay-now',
        element: (
          <HrRoute>
            <PayNow />
          </HrRoute>
        ),
      },
      {
        path: '/dashboard/progress',
        element: (
          <HrRoute>
            <Progress />
          </HrRoute>
        ),
      },
      {
        path: '/dashboard/employee-list/singleEmployee/:id',
        element: (
          <HrRoute>
            <SingleEmployee />
          </HrRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/employees/${params.id}`),
      },
      // Employee only routes
      {
        path: '/dashboard/payment-history',
        element: (
          <EmployeeRoute>
            <PaymentHistory />
          </EmployeeRoute>
        ),
      },
      {
        path: '/dashboard/work-sheet',
        element: (
          <EmployeeRoute>
            <WorkSheet />
          </EmployeeRoute>
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
