import React from 'react'
import Subtotal from './shared/Subtotal'

const ProceedToBuy = () => {
  return (
    <div className='w-[20%] h-fit border border-gray-300 ml-4'>
        <div className='p-4 text-sm'>
            <p>
                Your order is eligible for FREE Delivery. Choose FREE Delivery option at checkout.
            </p>
            <Subtotal />
            <button className='bg-[#FFD814] w-full rounded-md p-2 my-3 shadow-md'>Proceed to Buy</button>
        </div>
    </div>
  )
}

export default ProceedToBuy