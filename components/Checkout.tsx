"use client"
import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import OrderSummary from './OrderSummary'
import Image from 'next/image'
import amazonLogo from "@/public/amazon-logo.png"
import { FaLock } from 'react-icons/fa'

const Checkout = () => {
    return (
        <>
            <div className='absolute top-0 w-full p-12 bg-white'>
                <div className=' flex items-center justify-between w-[70%] mx-auto border-b-4 border-gray-400 pb-4'>
                    <div>
                        <Image alt='amazon logo' src={amazonLogo} height={150} width={150} />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>Checkout</h1>
                    </div>
                    <div className='text-gray-400'>
                        <FaLock size={30} />
                    </div>
                </div>
                <div className='flex w-[70%] mx-auto'>
                    <div className='flex-[2]'>
                        <DeliveryAddress />
                    </div>
                    <div className='flex-1'>

                        <OrderSummary />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout