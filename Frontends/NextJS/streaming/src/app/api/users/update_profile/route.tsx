import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from '@/models/userModel'
export async function POST(req: NextRequest) {
    try {
        //TODO:: send updated user info to user.
        const {user , name, email, oldPassword, newPassword} = await req.json();
        
        const userExists = await User.findOne({username: user});
        if(userExists) {
            const updatedUser = await User.updateOne({'username': user},{$set: {'username' : name}})
            return NextResponse.json({message: "User updated" + updatedUser})
        }
        return NextResponse.json({message: "User does not exist"})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}