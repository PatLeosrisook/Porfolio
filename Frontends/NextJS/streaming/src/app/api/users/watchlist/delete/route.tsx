import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
connect();
export async function DELETE( req : NextRequest) {
    try{
        const reqBody = await req.json();
        console.log("DELELLTE MOVIE", reqBody); 
        const {email, movie} = reqBody

        console.log("Email:", email, "Movie:", movie);

        if (!email || !movie) {
            return NextResponse.json(
                { message: "Missing email or movie in query parameters" },
                { status: 400 }
            );
        }
        const user = await User.findOne({email: email})
        

        if(!user) {
            return NextResponse.json({message: "User does not exist"}, {status: 404})
        }
        let deleteWatchlist = user.watchlist.filter(currentMovie => currentMovie.id == movie.id)
        user.watchlist = user.watchlist.filter(list => list.id !== movie.id)
        await user.save();
        return NextResponse.json({message: `Unfavourite ${deleteWatchlist.title}`})

    } catch(err) {
        console.log("ERR in DELETE", err.message, err)
        return NextResponse.json({Message: "unable to delete watchlist"}, {status: 500})
    }
}