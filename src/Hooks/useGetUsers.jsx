/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useGetUsers = () => {
  const axiosSecure = useAxiosSecure()
  const {
    data: users = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users')
        return res.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return [users, loading, refetch]
}

export default useGetUsers
