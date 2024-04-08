import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import { supabase } from '@/lib/supabase/products';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummary = () => {
    const cart = useAppSelector(getCart)
    const createStripeSession = async ()=>{
        const { data: {user}} = await supabase.auth.getUser()
        const stripe = await stripePromise

        const checkoutSession = await axios.post("/api/checkout-sessions",{
            items:cart,
            email:user?.email
        })

        console.log("checkoutSession",checkoutSession)

    }
  return (
    <div className=' border border-gray p-4 mt-5'>
        <div>
            <h3 className='font-bold'>Order Summary</h3>
            <div className='text-xs'>
                <div className='flex justify-between items-center'>
                    <p>items</p>
                    <p>₹749.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Delivery</p>
                    <p>₹40.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Total</p>
                    <p>₹749.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Promotion Applied</p>
                    <p>-₹40.00</p>
                </div>
                <div className='flex justify-between items-center font-bold text-2xl text-[#812704] py-2 border-t border-b border-gray-300 my-1'>
                    <h3>Order Total: </h3>
                    <h3>{"34324"}</h3>
                </div>
            </div>
        </div>
        <div>
            <button
            onClick={createStripeSession}
            className='bg-[#FFD814] w-full rounded px-4 py-1 my-3'>Place your order now</button>
        </div>
    </div>
  )
}

export default OrderSummary