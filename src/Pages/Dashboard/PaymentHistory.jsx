/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import moment from 'moment'
import useGetPayments from '../../Hooks/useGetPayments'
import useAuth from '../../Hooks/useAuth'

const PaymentHistory = () => {
  const { user } = useAuth()
  const [payments, loading, refetch] = useGetPayments()

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <>
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

              {payments.map((payment) => (
                <tbody
                  key={payment?._id}
                  className='text-center border-t border-gray-100 divide-y divide-gray-100'
                >
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 capitalize'>
                      {moment(payment?.date).format('MMMM')}
                    </td>
                    <td className='px-6 py-4 capitalize'>{payment?.amount}</td>
                    <td className='px-6 py-4 capitalize'>
                      {payment?.transactionId}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        </div>
      </>
    </>
  )
}

export default PaymentHistory
