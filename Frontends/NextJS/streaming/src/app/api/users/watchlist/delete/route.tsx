import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
connect();
export async function DELETE( req : NextRequest) {
    console.log("DELELLTE MOVIE", req)
    try{
        const email = req.nextUrl.searchParams.get('email');
        const movie = req.nextUrl.searchParams.get('movie');

        console.log("Email:", email, "Movie:", movie);

        if (!email || !movie) {
            return NextResponse.json(
                { message: "Missing email or movie in query parameters" },
                { status: 400 }
            );
        }
        // const email = req.nextUrl.searchParams.get('email');
        // const user = await User.findOne({email: email} , 'email watchlist')
        // console.log("Delete server: ", user ,email)
        // if(user.email) {
        //     // delete watchlist 
        //     user.watchlist = user.watchlist.filter(movie => movie.id!== req.body.movie.id);
        //     await user.save();
        //     return NextResponse.json({message: "Unsaved movie"})
        // } 
        return NextResponse.json({message: "User not found"}, {status: 404})
    } catch(err) {
        console.log("ERR in DELETE", err.message, err)
        return NextResponse.json({Message: "unable to delete watchlist"}, {status: 500})
    }
}