/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useEmployee = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
    queryKey: [user?.email, 'isEmployee'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking if the user is Employee', user)
      const res = await axiosSecure.get(`/users/employee/${user.email}`)
      return res.data?.employee
    },
  })
  return [isEmployee, isEmployeeLoading]
}

export default useEmployee
