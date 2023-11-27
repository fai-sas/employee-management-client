/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useGetPayments = () => {
  const axiosSecure = useAxiosSecure()
  const {
    data: payments = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/payments`)
        return res.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return [payments, loading, refetch]
}

export default useGetPayments
