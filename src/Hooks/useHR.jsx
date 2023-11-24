/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useHR = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isHR, isPending: isHRLoading } = useQuery({
    queryKey: [user?.email, 'isHR'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking if the user is HR', user)
      const res = await axiosSecure.get(`/users/hr/${user.email}`)
      return res.data?.hr
    },
  })
  return [isHR, isHRLoading]
}

export default useHR
