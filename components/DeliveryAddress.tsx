import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'

const DeliveryAddress = () => {

    const cart = useAppSelector(getCart)
    return (
        <div>
            
            <div>
                <div className='w-[70%] mx-auto border-b-2 border-gray-300 py-4'>
                    <div className='flex justify-between '>
                        <h3 className='font-bold text-lg'>1. Delivery Address</h3>
                        <p className='text-sm'>Surender Kumar <br />
                            Cozy apartment <br />
                            Bhutany colony <br />
                            Jalandar, Punjab 114400 <br />
                            Add delivery instructions
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[70%] mx-auto border-b-2 border-gray-300 py-4'>
                    <div className='flex justify-between '>
                        <h3 className='font-bold text-lg'>2. Items and delivery</h3>
                        <div className='flex flex-col gap-4'>
                            {
                                cart.map((product: any) => (
                                    <div className='ml-4 ' key={product.id}>
                                        <div className='flex'>
                                            <Image alt={product.title} src={product.image} width={100} height={100} />
                                            <div className='ml-4'>
                                                <h3 className='font-bold '>{product.title}</h3>
                                                <p className='text-2xl font-bold py-2'>${product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryAddress