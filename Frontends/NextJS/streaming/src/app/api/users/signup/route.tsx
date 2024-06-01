import {NextRequest, NextResponse} from 'next/server'
import bycrypt from 'bcryptjs'
import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json(); 
        const {username, email, password} = reqBody;

        console.log("Signing up:" ,reqBody)

        //check if user already exists
        const user = await User.findOne({username});
        if(user) {
            return NextResponse.json({message: "User already exists"})
        }

        //hash password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password:  hashedPassword
        })

        await newUser.save();

        return NextResponse.json({message: "User created successfully"})
    } catch (error) {
        
    }
}
