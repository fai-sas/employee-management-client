/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const useGetEmployees = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const {
    data: employees = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['allEmployees'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/employees')
        return res.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return [employees, loading, refetch]
}

export default useGetEmployees
