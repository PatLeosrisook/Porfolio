import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
connect();
export async function GET(req : NextRequest) {

    try {
        console.log("Fetching watchlist from database....", req)
        const reqBody = await req.json();
        console.log(reqBody);
        const {email} = reqBody
        const user = await User.findOne({email: email} , 'watchlist')
        if(user) {
            // get watchlist 
            console.log("user watchlsit:". user.watchlist)
            return NextResponse.json({message: "Returning watchlist", watchlist: user.watchlist}, {status: 200})
        } else {
            // user doesn't exist
        }
        return NextResponse.json({message: "Something went wrong"} , {status: 500})    
    } catch(error) {
        console.log("Fetch watch list error: " + error)
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}