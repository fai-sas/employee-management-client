/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
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
import Contact from '../Pages/Contact'
import ErrorPage from '../Pages/ErrorPage'
import DashboardHome from '../Pages/Dashboard/DashboardHome'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },

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
          fetch(
            `https://employee-management-server-liard.vercel.app/employees/${params.id}`
          ),
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
