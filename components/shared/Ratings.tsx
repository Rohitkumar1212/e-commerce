import React from 'react'
import ratingStar from "../../public/star-icon.png"
import Image from 'next/image'
const Ratings = ({ ratings }: { ratings: any }) => {
    const jsonString = ratings
    const data = JSON.parse(jsonString);
    const rating = data.rate;
    // const productRating = JSON.stringify(rating)
    console.log("rating",rating)
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyData, i)=><Image src={ratingStar} height={20} width={20} alt='rating' key={i}/>)
            }
            <h3 className='text-[#007185] ml-2 font-bold'>{data.count} ratings</h3>
        </div>
    )
}

export default Ratings