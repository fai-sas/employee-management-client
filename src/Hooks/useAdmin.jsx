/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async () => {
      // console.log('asking or checking if the user is admin', user)
      const res = await axiosSecure.get(`/users/admin/${user.email}`)
      return res.data?.admin
    },
  })
  return [isAdmin, isAdminLoading]
}

export default useAdmin
