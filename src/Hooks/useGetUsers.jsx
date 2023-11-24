/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useGetUsers = () => {
  const {
    data: users = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await useAxiosSecure.get('/users')
      return res.data
    },
  })

  return [users, loading, refetch]
}

export default useGetUsers
