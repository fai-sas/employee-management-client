/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import useAuth from '../../Hooks/useAuth'
import Swal from 'sweetalert2'
import { Button } from '@material-tailwind/react'

const CheckoutForm = ({
  employeeId,
  employeeName,
  amount,
  selectedMonth,
  selectedYear,
}) => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const salary = parseFloat(amount)

  useEffect(() => {
    if (salary > 0) {
      axiosSecure
        .post('/create-payment-intent', {
          salary,
          employeeId,
          selectedMonth,
          selectedYear,
          employeeName,
        })
        .then((res) => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [
    axiosSecure,
    employeeName,
    salary,
    employeeId,
    selectedMonth,
    selectedYear,
  ])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('payment error', error)
      setError(error.message)
    } else {
      console.log('payment method', paymentMethod)
      setError('')
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      })

    if (confirmError) {
      console.log('confirm error')
    } else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)

        // now save the payment in the database
        const payment = {
          employeeId,
          employeeName,
          selectedMonth,
          selectedYear,
          email: user.email,
          amount: amount,
          transactionId: paymentIntent.id,
          date: new Date(),
        }

        console.log('Selected Month:', selectedMonth)
        console.log('Selected Year:', selectedYear)

        const res = await axiosSecure.post('/payments', payment)
        console.log('payment saved', res.data)
        // refetch()
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Employee Has Been Successfully Paid',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Button
        className='my-4'
        ripple={true}
        type='submit'
        disabled={!stripe || !clientSecret}
      >
        Pay Now
      </Button>
      {/* <button
        className='my-4 btn btn-sm btn-primary'
        type='submit'
        disabled={!stripe || !clientSecret}
      >
        Pay Now
      </button> */}
      <p className='text-red-600'>{error}</p>
      {transactionId && (
        <p className='text-green-600'> Your transaction id: {transactionId}</p>
      )}
    </form>
  )
}

export default CheckoutForm
