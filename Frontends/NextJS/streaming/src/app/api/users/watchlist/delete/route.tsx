import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
export default async function DELETE(res : NextResponse, req : NextRequest) {

    try{
        const email = req.nextUrl.searchParams.get('email');
        const user = await User.findOne({email: email} , 'email watchlist')
        if(user.email) {
            // delete watchlist 
            user.watchlist = user.watchlist.filter(movie => movie.id!== req.body.movie.id);
            await user.save();
            return NextResponse.json({message: "Unsaved movie"})
        } 
        return NextResponse.json({message: "User not found"}, {status: 404})
    } catch(err) {

    }
}