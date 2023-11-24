/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useGetAllEmployees = () => {
  const axiosSecure = useAxiosSecure()
  const {
    data: employees = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['employees'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users/employees')
        return res.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return [employees, loading, refetch]
}

export default useGetAllEmployees
