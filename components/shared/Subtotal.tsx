"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import React from 'react'

const Subtotal = () => {
    const cart = useAppSelector(getCart)
    let totalPrice = 0;
    cart.forEach((item: any) => {
        totalPrice += item.price * item.quantity
    })
    // Use toFixed() to limit the decimal places to 2
    totalPrice = parseFloat(totalPrice.toFixed(2));
  return (
        <h2>{`Subtotal (${cart.length} items): `}<span className='font-bold'>{`$${totalPrice}`}</span></h2>
  )
}

export default Subtotal