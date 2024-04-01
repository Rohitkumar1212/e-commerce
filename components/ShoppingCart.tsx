"use client"
import { useAppDispatch, useAppSelector } from '@/lib/supabase/hooks/redux'
import { clearAllCart, decreamentQuantity, getCart, increamentQuantity, removeFromTheCart } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'
import Subtotal from './shared/Subtotal'

const ShoppingCart = () => {
    const cart = useAppSelector(getCart)
    const dispatch = useAppDispatch()
    // console.log("cart", cart)
    return (
        <div className='w-[70%]'>
            <div className='flex justify-between items-center  border-b border-gray-300 py-5 '>
                <h1 className='font-bold text-2xl'>Shopping Cart</h1>
                <p className='font-medium pr-12'>Price</p>
            </div>
            {
                cart.map((product: any) => (
                    <div key={product.id} className='py-4 flex justify-between border-b border-gray-200'>
                        <div className='flex'>
                            <div >
                                <Image src={product.image} alt={product.title ? product.title : "image"} height={100} width={100} />
                            </div>
                            <div className='ml-4 '>
                                <h2 className='font-medium'>{product.title}</h2>
                                <p className='text-[#007600] my-2 font-bold text-xs'>In Stock</p>
                                <h3
                                    onClick={() => dispatch(removeFromTheCart(product.id))}
                                    className='font-bold cursor-pointer text-red-600'>Remove</h3>
                                <div className='text-xl font-medium flex justify-between items-center w-fit bg-gray-200 rounded-md px-5 py-1 my-4'>
                                    <div
                                        onClick={() => product.quantity > 1 && dispatch(decreamentQuantity(product))}
                                        className='cursor-pointer mr-4'>-</div>
                                    <div className='cursor-pointer'>{product.quantity}</div>
                                    <div
                                        onClick={() => dispatch(increamentQuantity(product))}
                                        className='cursor-pointer ml-4'>+</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl'>{`$${product.price}`}</h3>
                            <p className='text-xs py-1'>M.R.P.: <span className='line-through'>₹3,995.00</span></p>
                        </div>
                    </div>
                ))
            }

            <div className='flex justify-around my-4'>
                {cart.length > 0 && <h3 onClick={()=>dispatch(clearAllCart())} className='text-red-600 font-bold cursor-pointer'>Clear All</h3>}
                <Subtotal />
            </div>
        </div>
    )
}

export default ShoppingCart