"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Logo from "../public/amazon-logo-2.webp"
import { BiCart } from 'react-icons/bi'
import { CgSearch } from 'react-icons/cg'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Link from 'next/link'

const Header = () => {
    const [query, setQuery ] = useState<string>("")
    const route = useRouter()

    const cart = useAppSelector(getCart)

    const searchHandler = () => {
        route.push(`/search/${query}`)
    }
  return (
    <div className='bg-[#131921] text-white pt-4 pb-3'>
        <div className='flex items-center justify-between w-[90%] mx-auto'>
            <Link href={`/`}>
                <Image src={Logo} width={120} height={120} alt='Logo'/>
            </Link>
            <div className='w-[80%] flex items-center'>
                <div className='flex relative w-[70%] mx-auto'>
                <input
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                type="text"
                placeholder='Search Amazon.in'
                className='w-full p-2 rounded-md text-black outline-none'/>
                <div onClick={searchHandler} className='bg-[#FEBD69] absolute right-0 rounded-r-md h-full flex items-center w-10 justify-center cursor-pointer'>
                    <CgSearch size={"24px"} className='text-black'/>
                </div>
                </div>
            </div>
            <div className='flex items-center justify-around w-[20%]'>
                <div className='cursor-pointer'>
                    <h3 className='text-xs'>Hello, Rohit</h3>
                    <h3 className='font-medium text-xs'>Account & Lists</h3>
                </div>
                <div className='cursor-pointer'>
                    <p className='text-xs'>Returns</p>
                    <h3 className='font-medium text-xs'>& Orders</h3>
                </div>
                <Link href="/cart" className='cursor-pointer'>
                    <div className='flex relative'>
                        <div>
                            <BiCart size={"40px"}/>
                        </div>
                        <h3 className='mt-4'>cart</h3>
                        <p className='absolute top-[-8px] left-[18px]'>{cart.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header