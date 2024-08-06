
'use client';
import { useEffect, useState } from 'react';
export default function Genre({searchParams}) {
    const movieList = searchParams.genre

    useEffect(() => {
        console.log("IN SPEC GENRE", JSON.parse(movieList), )
    })
    return(
        <section>
            <h1>Sub movie</h1>
        </section>
    )
}