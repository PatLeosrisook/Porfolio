import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"
connect();
export async function POST(req : NextRequest, res : NextResponse) {


  try {
    const reqBody = await req.json(); 
    const { email, movie } = reqBody; // Use email instead of userId
    console.log("Hnalder add watch", email, movie)
    // Find the user by email and update their watchlist
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        $push: {
          watchlist: {
            title: movie.title,
            type: movie.type,
            genre: movie.genre,
            year: movie.year,
            rating: movie.rating,
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

