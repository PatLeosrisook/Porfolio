'use client';
import axios from "axios";
export default async function getWatchlist({email} : {email: string}) {
    let list = await axios('../app/api/users/watchlist/get', {params: {email: email}}).then(response => {
        console.log("Return watchlist" , response.data)
        // return response.data.watchlist
    }).catch(err => {
        console.log("Error getting watchlist", err.message)
    })
    return list
}