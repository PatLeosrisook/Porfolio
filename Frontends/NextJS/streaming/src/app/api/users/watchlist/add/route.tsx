
import { NextRequest, NextResponse } from "next/server";
export default async function handler(req : NextRequest, res : NextResponse) {
    console.log("Hnalder add watch")
    const { email, movie } = req.body; // Use email instead of userId

  try {
    // Find the user by email and update their watchlist
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        $push: {
          watchlist: {
            title: movie.title,
            type: movie.type,
            genre: movie.genre,
            releaseDate: movie.releaseDate,
            rating: movie.rating,
            addedAt: new Date(),
          }
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Movie added to watchlist', watchlist: updatedUser.watchlist });
  } catch (error) {
    console.error('Error adding movie to watchlist:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

