import {connect} from "@/dbConfig/dbConfig"
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {email, password} = reqBody;

        console.log("Logging in:" , reqBody)
        const user = await User.findOne({email});
        if(!user) {
            return NextResponse.json({message: "User does not exist"})
        }

        const validPassword = await bycrypt.compare(password, user.password);
        if(!validPassword) {
            return NextResponse.json({message: "Invalid password"}, {status: 400})

        }

        //create token for cookie 
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //generate token 
        const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!);
        const response = NextResponse.json({message: "User logged in successfully",success: true,  token: token})  
        response.cookies.set('token', token, {httpOnly: true})

        return response;

    } catch (error) {
        return NextResponse.json({message: "Something went wrong"} , {status: 500})        
    }
}