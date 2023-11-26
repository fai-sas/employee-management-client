/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const useGetTasks = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const {
    data: tasks = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/tasks')
        return res.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return [tasks.filter((task) => task.userId === user.uid), loading, refetch]
}

export default useGetTasks
