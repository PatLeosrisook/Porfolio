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
            const updatedUser = await User.updateOne({'username': data.user},{$set: {'username' : data.name}})
            return NextResponse.json({message: "User updated" + updatedUser})
        }
        return NextResponse.json({message: "User does not exist"})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}