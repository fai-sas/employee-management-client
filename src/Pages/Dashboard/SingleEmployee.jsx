/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom'

const SingleEmployee = () => {
  const { name, designation, photoURL, _id } = useLoaderData()

  return (
    <div>
      <h1>SingleEmployee Name : {name}</h1>
      <h1>SingleEmployee Designation : {designation}</h1>
      <h1>SingleEmployee Designation : {designation}</h1>
      <img src={photoURL} alt={name} />
    </div>
  )
}

export default SingleEmployee
