// components/Cart.js
import React from 'react'

const Cart = ({cartItems, onUpdate, onRemove}) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => onUpdate(item.id, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => onUpdate(item.id, item.quantity - 1)}>
            -
          </button>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  )
}

export default Cart
