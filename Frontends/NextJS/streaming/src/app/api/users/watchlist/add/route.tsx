import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"
connect();
export async function POST(req : NextRequest, res : NextResponse) {


  try {
    const reqBody = await req.json(); 
    const { email, movie } = reqBody; // Use email instead of userId
    const getUser = await User.findOne({email: email})
    const isMovieExist = getUser.watchlist.some(storedMovie => storedMovie.id === movie.id);
    if (isMovieExist) {
      return NextResponse.json({message: "Movie already added"}, {status: 500})
    } 
    
    // Find the user by email and update their watchlist
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        $push: {
          watchlist: {
            id:movie.id,
            title: movie.title,
            type: movie.type,
            src: movie.src,
            overview: movie.overview, 
            genre: movie.genre,
            year: movie.year,
            addedAt: new Date(),
          }
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({error: "User not found"}, {status: 404})
    }

    return NextResponse.json({ message: 'Movie added to watchlist'}, {status: 200})
  } catch (error) {
    console.error('Error adding movie to watchlist:', error);
    return NextResponse.json({error: error.message}, {status: 500});   
  }
}

