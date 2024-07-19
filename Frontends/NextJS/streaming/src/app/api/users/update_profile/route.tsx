import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bycrypt from 'bcryptjs'
import User from '@/models/userModel'
export async function POST(req: NextRequest) {
    try {
        const {user , name, email, oldPassword, newPassword} = await req.json();
        const userExists = await User.findOne({username: user});
        if(userExists) {
            if(name) {
                const updatedUser = await User.updateOne({'username': user},{$set: {'username' : name}})
                return NextResponse.json({message: "User updated" + updatedUser})
            }
            if(email && oldPassword && newPassword) {
                
            }
            if(email) {
                await User.updateOne({'username': user},{$set: {'email' : email}})
            }
            if(oldPassword && newPassword) {
                let isValidPassword = await bycrypt.compare(oldPassword, userExists?.password)
                if(isValidPassword) {
                    const salt = await bycrypt.genSalt(10);
                    const hashedPassword = await bycrypt.hash(newPassword, salt);
                    let updatedPassword = await User.updateOne({'username': user},{$set: {'password' :  hashedPassword }})
                }
                return NextResponse.json({message: "account updated"})
            }
        }
        return NextResponse.json({message: "User does not exist"})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}