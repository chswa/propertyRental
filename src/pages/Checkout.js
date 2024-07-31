// pages/Checkout.js
import React, {useState} from 'react'

const Checkout = () => {
  const [bookingDetails, setBookingDetails] = useState({
    contact: '',
    payment: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Implement checkout logic here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Contact Information</label>
        <input
          type="text"
          name="contact"
          value={bookingDetails.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Payment Details</label>
        <input
          type="text"
          name="payment"
          value={bookingDetails.payment}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Checkout</button>
    </form>
  )
}

export default Checkout
