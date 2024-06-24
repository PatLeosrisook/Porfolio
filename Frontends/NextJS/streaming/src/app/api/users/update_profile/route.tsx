import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        //TODO:: send updated user info to user.
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});   
    }
}