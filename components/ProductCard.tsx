import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'

const ProductCard = ({ product }: { product: any }) => {
    return (
        <div>
            <div className='cursor-pointer'>
                <div className='bg-gray-100 p-2 rounded-md flex items-center justify-center'>
                    <Image className='mix-blend-multiply h-[250px] p-4' src={product.image} alt={product.title} height={400} width={240} />

                </div>
                <h1 className='font-bold'>{`${product.title.substring(0,30)}`}</h1>
                <p>{`${product.description.substring(0, 50)}...`}</p>
                <Ratings ratings={product.rating}/>
                <p className='font-bold text-2xl'>{`$${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard