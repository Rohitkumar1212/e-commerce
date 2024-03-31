import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCartContainer from './AddToCartContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex justify-between'>
                <div className='w-[70%]'>
                    {singleProduct.map((product: any, i: number) => (
                        <div className='flex gap-4'>
                            <div className='bg-gray-100 p-2'>
                                <Image className='mix-blend-multiply' key={i} src={product.image} width={500} height={600} alt={singleProduct.title} />

                            </div>
                            <div className='mx-4 w-[70%]'>
                                <h1 className='font-bold text-lg'>{product.title}</h1>
                                <p>{product.description}</p>
                                <Ratings ratings={product.rating} />
                                <h3 className='font-bold text-2xl'>{`$${product.price}`}</h3>
                                <div>
                                    <h3 className='font-bold text-2xl'>About this item</h3>
                                    <li>CUSHIONY COTTON SOFT FABRIC: Supples Premium diaper pants or Supples pant style diaper pants are made of cottony soft material which is gentle on your baby’s skin and keeps their precious skin perfect.</li>
                                    <li>CUSHIONY COTTON SOFT FABRIC: Supples Premium diaper pants or Supples pant style diaper pants are made of cottony soft material which is gentle on your baby’s skin and keeps their precious skin perfect.</li>
                                    <li>CUSHIONY COTTON SOFT FABRIC: Supples Premium diaper pants or Supples pant style diaper pants are made of cottony soft material which is gentle on your baby’s skin and keeps their precious skin perfect.</li>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <AddToCartContainer />
            </div>
        </div>
    )
}

export default SingleProduct