"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    const cart = useAppSelector(getCart)
    return (
        <div className='absolute top-0 w-full bg-white py-12'>
            <div className='w-[70%] mx-auto'>
                <h2> Thank yoou for prdering with Amazon the items.
                </h2>
                <div>
                    <h3 className='font-bold py-3 underline'>Order Details</h3>

                    <div>
                        {cart.map((product:any)=>(
                            <div className='flex' key={product.id}>
                                <Image alt='' src={product.image} height={100} width={100}/>
                                <div className='ml-5 font-bold'>
                                    <h3>{product.title}</h3>
                                    <h3>{product.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='my-5'>
                <Link href={"/"} className='bg-[#FFD814] px-4 py-1 rounded '>Checkout more products</Link>
                </div>
            </div>
        </div>
    )
}

export default Success