'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark as Bookedmarked, faPlay } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as unBookedmark } from "@fortawesome/free-regular-svg-icons"
import { useState, useEffect } from "react";
import axios from "axios";
import GetUser from "@/helper/getUser";
import { options } from "../../public/API";
export default function RecommendedMedia({id, Year, Title, isAdult, Genre,  Overview, Type, src, userEmail}: {
    id:number,
    Year: string,
    Title: string,
    Genre: number,
    Overview: string,
    isAdult: boolean,
    Type: string,
    src: string,
    userEmail: string
}) {
    const [booked, setBooked] = useState(false)
    let handleBookmarked = () => {
        //TODO:: this will then save the id of the current movie to user's database.
        if(booked) {

            let movie = {
                id: id, 
                title: Title, 
                overview: Overview,
                type: Type, 
                src: src,
                genre: Genre,
                year: Year,
                isAdult: isAdult,
                addedAt: new Date()
            }
            let data = {
                email: userEmail,
                movie: movie
            }
            options.method = "POST"
            options.url = "/api/user/watchlist/add"
            //TODO:: return 405 error : 
            axios({
                method: options.method,
                url: '/api/users/watchlist/add', // Set the actual URL here
                data: data, // The data for the POST request
                headers: options.headers
            
            }).then(response => {
                //TODO:: React toast here 
            }).catch(error => {
                console.log("OH, something went wrong", error.message)
            })
        } else {
            let movie = {
                id: id
            }
            let data = {
                email: userEmail, 
                movie: movie
            }
            axios({
                method: "DELETE",
                url: '/api/users/watchlist/delete',
                data: data,
                headers: options.headers
            }).then(response => {
                console.log("Deleted")
            }).catch(err=> {
                console.log("Error deleteing", err.message)
            })
        }

    }
    let toggleBookmarked = () => {
        setBooked(!booked);
    }
    useEffect(() => {
        handleBookmarked();
    },[booked])

    return (
        <article className="RecommendedMedia">
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${src})`, backgroundSize: "cover" }} className="Image_wrap">

            </div>
            <div className="Content">
                <p className="Content-title">{Title}</p>
                <div className="Content-detail">
                    <p>{Year}</p>
                    <p>{(isAdult) ? "18+" : "PG"}</p>
                </div>
                <p className="overview">{Overview}</p>
                <div className="Content-action">
                    <div onClick={handleBookmarked} className="bookmark">
                        <FontAwesomeIcon icon={unBookedmark} /> 
                        <p>Bookmark</p>
                    </div>
                    <div className="trailer">
                        <p>See trailer</p>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>
                </div>
            </div>
        </article>
    )
}