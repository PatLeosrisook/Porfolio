import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
connect();
export async function GET(req : NextRequest) {

    try {
        const email = req.nextUrl.searchParams.get('email');
        const user = await User.findOne({email: email} , 'email watchlist')
        console.log("Fetching watchlist, here's the email: ", email, typeof user.email)
        if(user.email) {
            // get watchlist 
            console.log("user watchlsit:", user.watchlist)
            return NextResponse.json({message: "Returning watchlist", watchlist: user.watchlist}, {status: 200})
        } else {
            // user doesn't exist
            console.log("user don't exist")
        }
        return NextResponse.json({message: "Something went wrong"} , {status: 500})    
    } catch(error) {
        console.log("Fetch watch list error: " + error)
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}