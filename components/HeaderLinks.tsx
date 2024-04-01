import { supabase } from '@/lib/supabase/products'
import Link from 'next/link'
import React from 'react'

const HeaderLinks = ({router}:{router:any}) => {
    const itemLists = [
        "All",
        "Fresh",
        "Amozon miniTV",
        "Sell",
        "Gift Cards",
        "Baby",
        "Buy Again",
        "Browsing History",
        "Amazon Pay",
        "Gift Ideas",
        "Health, Husehold & Personal Care"
    ]

    const handleSignOut = async()=>{
        const { error } = await supabase.auth.signOut()
        router.push("/signin")
    }
    return (
        <>
            <div className='bg-[#232F3E] w-full text-white flex justify-between  py-2'>
                <div>
                    {itemLists.map((link, i) => (
                        <Link href={`/${link}`} key={i} className='mx-2 p-1 rounded-md hover:bg-slate-200/50 transition duration-300 ease-in-out'> {link}</Link>
                    ))}
                </div>
                <div className='mr-5'>
                    <h3 onClick={handleSignOut} className='text-[#FEBD69] font-bold cursor-pointer hover:underline'>Sign Out</h3>
                </div>
            </div>

        </>
    )
}

export default HeaderLinks