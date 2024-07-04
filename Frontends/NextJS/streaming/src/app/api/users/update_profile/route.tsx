import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bycrypt from 'bcryptjs'
import User from '@/models/userModel'
export async function POST(req: NextRequest) {
    try {
        //TODO:: send updated user info to user.
        const {user , name, email, oldPassword, newPassword} = await req.json();
        console.log("Sending to update", email)
        const userExists = await User.findOne({username: user});
        if(userExists) {
            console.log("User exists")
            if(name) {
                console.log("Name not empty")
                const updatedUser = await User.updateOne({'username': user},{$set: {'username' : name}})
                return NextResponse.json({message: "User updated" + updatedUser})
            }
            if(email && oldPassword && newPassword) {
                console.log("email, oldPassword, newPassword not empty", email, oldPassword, newPassword)
                
                // const updatedEmail = await User.updateOne({'username': user},{$set: {'email' : email}})
                //check password
                
                // return NextResponse.json({message: "User updated" + updatedUser})
                }
            if(email) {
                const getUser = await User.findOne({username: user})
                const updatedEmail = await User.updateOne({'username': user},{$set: {'email' : email}})
                return NextResponse.json({message: "User updated" })

            }
            if(oldPassword && newPassword) {
                console.log("oldPassword, newPassword not empty", oldPassword)
                //TODO:: have to unhash old password from db first 
                const isPasswordCorrect = await User.findOne({username: user, password:  oldPassword})
                console.log("Is password correct: " + isPasswordCorrect)
            }
        }
        return NextResponse.json({message: "User does not exist"})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}