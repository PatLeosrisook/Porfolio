
'use client';
import { useEffect, useState , useContext} from 'react';
import { MovieContextProvider } from '@/helper/movieContext';
export default function Genre({searchParams}) {
    // const  Movie  = useContext(MovieContextProvider)
    const movieList = searchParams.genre

    useEffect(() => {
        console.log("IN SPEC GENRE", JSON.parse(movieList), "CONTEXT",Movie)
    })
    return(
        <section>
            <h1>Sub movie</h1>
        </section>
    )
}