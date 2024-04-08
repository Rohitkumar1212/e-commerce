import { NextRequest,  NextResponse} from "next/server";


const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
export async function POST(req:NextRequest, res:NextResponse){
    const body = await req.json()
    const {items, email} =body
    // console.log("body-", body)

    // stripe payment gateaway

    // for line_tems sending details of items
    const arrangeItems = items.map((item:any)=>({
        price_data: {
            currency:'usd',
            product_data:{
                name:item.title,
                images:[item.image]
            },
            unit_amount:Math.floor(item.price*84)
        },
        quantity: 1
    }))


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: arrangeItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`, 
        metadata: {
            email,
            images:JSON.stringify(items.map((item:any)=>item.image))
        },
        
    })

    

    return NextResponse.json({
        id:session.id
    })
}