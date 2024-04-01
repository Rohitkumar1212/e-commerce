import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProceedToBuy from './ProceedToBuy'

const Cart = () => {
  return (
    <div className='w-[80%] mx-auto mt-10'>
      <div className='flex'>
        <ShoppingCart />
        <ProceedToBuy />
      </div>
    </div>
  )
}

export default Cart