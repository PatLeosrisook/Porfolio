'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark as Bookedmarked, faPlay } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as unBookedmark } from "@fortawesome/free-regular-svg-icons"
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetUser from "@/helper/getUser";
import { options } from "../../public/API";
export default class RecommendedMedia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            booked: null,
        };

        this.hasMounted = false;

        this.handleBookmarked = this.handleBookmarked.bind(this);
        this.toggleBookmarked = this.toggleBookmarked.bind(this);
    }
    componentDidMount() {
        // if (this.props.presetBookmarked) {
        //     // Set bookmark state without adding to DB since it's already there.
        //     this.setState({ booked: this.props.presetBookmarked });
        // } else {
        //     this.setState({ booked: false });
        // }
        // this.hasMounted = true;
    }
    //TODO:: Convert this to class
    componentDidUpdate(prevProps, prevState) {
        // if (this.hasMounted && this.state.booked !== prevState.booked) {
        //     this.handleBookmarked();
        // }
    }
     handleBookmarked = () => {
        const {
            id,
            Year,
            Title,
            Overview,
            Type,
            src,
            Genre,
            isAdult,
            userEmail,
        } = this.props;
      
        if(this.state.booked) {

            let movie = {
                id: id, 
                title: Title, 
                overview: Overview,
                type: Type, 
                src: src,
                genre: Genre,
                year: Year,
                isBooked: true,
                isAdult: isAdult,
                addedAt: new Date()
            }
            let data = {
                email: userEmail,
                movie: movie
            }
            options.method = "POST"
            options.url = "/api/user/watchlist/add"
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
        }
        if(this.state.booked == false) {

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
    toggleBookmarked = () => {
        console.log("toggling")
        setBooked(!booked);
    }
    // useEffect(() => {
    //     if(hasMounted.current && (booked !== null)) {
    //         handleBookmarked();
    //     } else {
    //         hasMounted.current = true;
    //         setBooked(false);
    //     }
    //     if(presetBookmarked) {
    //         // set bookmark state without adding to db since it's already there? or being removed
    //         setBooked(presetBookmarked)
    //     }
    // },[booked,presetBookmarked]);

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
                    <div onClick={toggleBookmarked} className="bookmark">
                        {
                            (booked || presetBookmarked) ? <FontAwesomeIcon icon={Bookedmarked} /> : <FontAwesomeIcon icon={unBookedmark} /> 
                        }
                        
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