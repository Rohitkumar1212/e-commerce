"use client"
import React, { useEffect } from 'react'
import SingleProduct from "@/components/SingleProduct"
import { useParams } from 'next/navigation'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
const ProductPage = () => {
    const { id } = useParams()
    console.log("typeof id", typeof(id))
    const { singleProduct, getSingleProductFromSupabase } = useSupabase()

    useEffect(() => {
        getSingleProductFromSupabase(Number(id))
    }, [id, getSingleProductFromSupabase])
    return (
        <div className='flex'>
            <SingleProduct singleProduct={singleProduct}/>
            
        </div>
    )
}

export default ProductPage