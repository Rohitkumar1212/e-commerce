import React from 'react'
import prime from "../public/prime-logo.png"
import Image from 'next/image'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'
const AddToCartContainer = ({product}:{product: any}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  return (
    <div className='border border-gray-300 rounded-md h-fit text-sm'>
      <div className='p-4'>
        <Image src={prime} height={40} width={40} alt={"prime"}/>
      </div>
      <div className='p-4'>
        <h3><span className='text-[#147C8F]'>FREE delivery</span> Thursday, 21 March.<span className='text-[#147C8F]'>Details</span></h3>
        <h3 className='mt-4'>Or fastest delivery Tomorrow, 20 March. Order within 15 hrs 53 mins. Details</h3>
        <p className='text-[#147C8F] my-2'>Delivery to Pamila - America 114411</p>
        <button 
        onClick={()=> {
          dispatch(addToCart(product))
          router.push(`/cart`)
        }}
        className='bg-[#FFD814] w-full rounded-full p-2'>Add to cart</button>
        <button className='bg-[#FFA41C] w-full rounded-full p-2 my-2'>Buy Now</button>
      </div>
    </div>
  )
}

export default AddToCartContainer