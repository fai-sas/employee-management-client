/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = ({
  amount,
  employeeName,
  selectedMonth,
  employeeId,
  selectedYear,
}) => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            employeeId={employeeId}
            employeeName={employeeName}
            amount={amount}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
