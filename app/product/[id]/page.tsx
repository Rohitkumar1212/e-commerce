"use client"
import React, { useEffect } from 'react'
import SingleProduct from "@/components/SingleProduct"
import { useParams } from 'next/navigation'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
const page = () => {
    const { id } = useParams()
    console.log("typeof id", typeof(id))
    const { singleProduct, getSingleProductFromSupabase } = useSupabase()

    useEffect(() => {
        getSingleProductFromSupabase(Number(id))
    }, [])
    return (
        <div className='flex'>
            <SingleProduct singleProduct={singleProduct}/>
            
        </div>
    )
}

export default page