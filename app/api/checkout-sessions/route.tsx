import { NextRequest,  NextResponse} from "next/server";

export async function POST(req:NextRequest, res:NextResponse){
    const body = await req.json()
    const {items, email} =body

    console.log("items--", items)
    console.log("email--", email)

    return NextResponse.json({
        message: "data coming"
    })
}