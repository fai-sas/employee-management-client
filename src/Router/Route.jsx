/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'

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
    // path: '/register',
    // element: <Register />,
  },
  {
    // path: '/login',
    // element: <Login />,
  },
])

export default Route
