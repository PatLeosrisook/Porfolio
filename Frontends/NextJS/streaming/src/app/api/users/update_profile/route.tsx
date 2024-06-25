import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from '@/models/userModel'
export async function POST(req: NextRequest) {
    try {
        //TODO:: send updated user info to user.
        const data = await req.json();
        
        console.log("Send from update" ,data)
        const userExists = await User.findOne({username: data.user});
        if(userExists) {
            console.log("User already exists")
        }
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}