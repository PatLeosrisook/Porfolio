import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
connect()

export async function GET(req:NextRequest, res:NextResponse) {
    try {
        const userID = await getDataFromToken(req)
        console.log("userTOKEN", userID)
        const user = await User.findOne({_id: userID}).select('-password')
        console.log("FIND USR", user)
        return NextResponse.json({
            message : 'user found',
            data:user
        })
    } catch (error) {
        return NextResponse.json(error.message);
    }
}