import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
connect()

export async function GET(req:NextRequest, res:NextResponse) {
    try {
        const userID = await getDataFromToken(req)
        const user = await User.findOne({_id: userID}).select('-password')
        return NextResponse.json({
            message : 'user found',
            data:user
        })
    } catch (error) {
        return NextResponse.json(error.message);
    }
}