import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from '@/models/userModel'
export async function POST(req: NextRequest) {
    try {
        //TODO:: send updated user info to user.
        const {user , name, email, oldPassword, newPassword} = await req.json();
        console.log("Sending to update")
        const userExists = await User.findOne({username: user});
        if(userExists) {
            console.log("User exists")
            if(name) {
                console.log("Name not empty")
                const updatedUser = await User.updateOne({'username': user},{$set: {'username' : name}})
                return NextResponse.json({message: "User updated" + updatedUser})
            }
            if(email && oldPassword && newPassword) {
                console.log("email, oldPassword, newPassword not empty")
                
                const updatedEmail = await User.updateOne({'username': user},{$set: {'email' : email}})
                //check password
                // const isPasswordCorrect = await User.findOne({username: user, password:  oldPassword})
                return NextResponse.json({message: "User updated" + updatedUser})
                }
            if(email) {
                console.log("only email not empty")
                const getUser = await User.findOne({username: user})
                console.log("This is the user" + getUser)
                // const updatedEmail = await User.updateOne({'username': user},{$set: {'email' : email}})

            }
            if(oldPassword && newPassword) {

            }
        }
        return NextResponse.json({message: "User does not exist"})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}