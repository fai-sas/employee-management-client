/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import moment from 'moment'
import useGetPayments from '../../Hooks/useGetPayments'
import useAuth from '../../Hooks/useAuth'
import { useEffect, useState } from 'react'

const PaymentHistory = () => {
  const { user } = useAuth()
  const userName = user?.displayName

  const [paymentsByUserID, setPaymentsByUserID] = useState([])
  const [payments, loading, refetch] = useGetPayments()

  useEffect(() => {
    const uniquePayments = payments.filter(
      (product) => product.employeeName === userName
    )
    setPaymentsByUserID(uniquePayments)
  }, [payments, userName])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <article className='flex gap-4 py-4 mx-8 text-2xl font-bold'>
        <h1>Payment History of {userName}</h1>
      </article>
      <>
        {paymentsByUserID.length ? (
          <div className='m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md'>
            <>
              <table className='w-full text-sm text-left text-gray-500 bg-white border-collapse'>
                <thead className='text-center bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-4 font-medium text-gray-900'
                    >
                      Month
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-4 font-medium text-gray-900'
                    >
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-4 font-medium text-gray-900'
                    >
                      Transaction ID
                    </th>
                  </tr>
                </thead>

                {paymentsByUserID.map((payment) => (
                  <tbody
                    key={payment?._id}
                    className='text-center border-t border-gray-100 divide-y divide-gray-100'
                  >
                    <tr className='hover:bg-gray-50'>
                      <td className='px-6 py-4 capitalize'>
                        {moment(payment?.date).format('MMMM')}
                      </td>
                      <td className='px-6 py-4 capitalize'>
                        {payment?.amount}
                      </td>
                      <td className='px-6 py-4 capitalize'>
                        {payment?.transactionId}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
          </div>
        ) : (
          <h1 className='flex items-center justify-center h-32 my-8 text-3xl font-bold '>
            No Payment Found For {userName}
          </h1>
        )}
      </>
    </>
  )
}

export default PaymentHistory
