/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import useGetPayments from '../Hooks/useGetPayments'
import moment from 'moment'
import { useLoaderData } from 'react-router-dom'

const EmployeeChart = () => {
  const { _id, name } = useLoaderData()
  const [paymentsByUserID, setPaymentsByUserID] = useState([])
  const [payments] = useGetPayments()

  useEffect(() => {
    const uniqueProducts = payments.filter(
      (product) => product.employeeId === _id
    )
    setPaymentsByUserID(uniqueProducts)
  }, [_id, payments])

  const chartData = paymentsByUserID.reduce((accumulator, pay) => {
    const formattedMonth =
      moment(pay.selectedMonth, 'MMMM').format('MMM') + ' ' + pay.selectedYear

    const existingMonth = accumulator.find(
      (item) => item.name === formattedMonth
    )

    const Salary = Number(pay.amount)

    if (!isNaN(Salary)) {
      if (existingMonth) {
        existingMonth.salary += Salary
      } else {
        accumulator.push({
          name: formattedMonth,
          Salary: Salary,
        })
      }
    } else {
      console.error(`Invalid salary for payment:`, pay)
    }

    return accumulator
  }, [])

  return (
    <section className='container flex items-center justify-center p-8 mx-auto mt-8'>
      {paymentsByUserID.length ? (
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey='Salary'
            fill='#82ca9d'
            activeBar={<Rectangle fill='gold' stroke='purple' />}
          />
        </BarChart>
      ) : (
        <h1 className='text-3xl font-bold'>No Payment Found For {name}</h1>
      )}
    </section>
  )
}

export default EmployeeChart
