import {NextRequest, NextResponse} from 'next/server'
import bycrypt from 'bcryptjs'
import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json(); 
        const {avatar, username, email, password} = reqBody;

        //check if user already exists
        const user = await User.findOne({email});
        if(user) {
            return NextResponse.json({message: "User already exists"})
        }

        //hash password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = new User({
            avatar, 
            username,
            email,
            password:  hashedPassword
        })

        const savedUser = await newUser.save();
        
        return NextResponse.json({message: "User created successfully"})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}
