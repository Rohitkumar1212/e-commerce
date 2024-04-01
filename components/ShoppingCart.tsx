"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'

const ShoppingCart = () => {
    const cart = useAppSelector(getCart)
    console.log("cart", cart)
    return (
        <div>
            <div className='flex justify-between items-center  border-b border-gray-300 py-5 '>
                <h1 className='font-bold text-2xl'>Shopping Cart</h1>
                <p className='font-medium pr-12'>Price</p>
            </div>
            {
                cart.map((product: any) => (
                    <div className='mt-4 flex justify-between'>
                        <div className='flex'>
                            <div >
                                <Image src={product.image} alt={product.title} height={100} width={100} />
                            </div>
                            <div className='ml-4'>
                                <h2 className='font-medium'>{product.title}</h2>
                                <p className='text-[#007600] my-2 font-bold text-xs'>In Stock</p>
                                <h3 className='font-bold cursor-pointer text-red-600'>Remove</h3>
                                <div className='text-xl font-medium flex justify-between items-center w-fit bg-gray-200 rounded-md px-5 py-1 my-4'>
                                    <div className='cursor-pointer mr-4'>-</div>
                                    <div className='cursor-pointer'>0</div>
                                    <div className='cursor-pointer ml-4'>+</div>
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
        </div>
    )
}

export default ShoppingCart