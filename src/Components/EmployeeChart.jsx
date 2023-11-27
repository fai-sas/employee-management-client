/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import useGetPayments from '../Hooks/useGetPayments'
import moment from 'moment'

const EmployeeChart = ({ salary }) => {
  const [payments, loading, refetch] = useGetPayments()

  const data = payments.reduce((accumulator, payment) => {
    const formattedMonth = moment(payment?.month).format('MMM YY')

    const existingMonth = accumulator.find(
      (item) => item.name === formattedMonth
    )

    const salary = Number(payment.amount)

    if (!isNaN(salary)) {
      if (existingMonth) {
        existingMonth.uv += salary
        existingMonth.salary += salary
      } else {
        accumulator.push({
          name: formattedMonth,
          uv: salary,
          salary: salary,
        })
      }
    } else {
      console.error(`Invalid salary for payment:`, payment)
    }

    return accumulator
  }, [])

  console.log(data)

  return (
    <section className='container flex items-center justify-center p-8 mx-auto mt-8'>
      <BarChart
        width={500}
        height={300}
        data={data}
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
          dataKey='salary'
          fill='#82ca9d'
          activeBar={<Rectangle fill='gold' stroke='purple' />}
        />
      </BarChart>
    </section>
  )
}

export default EmployeeChart
