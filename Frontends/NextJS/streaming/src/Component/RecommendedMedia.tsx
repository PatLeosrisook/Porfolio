'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark as Bookedmarked, faPlay } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as unBookedmark } from "@fortawesome/free-regular-svg-icons"
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetUser from "@/helper/getUser";
import { options } from "../../public/API";

interface RecommendedMediaProps {
    id: number;
    Year: string;
    Title: string;
    Genre: number;
    Overview: string;
    isAdult: boolean;
    Type: string;
    src: string;
    userEmail: string;
    presetBookmarked: boolean;
}

// Define the state type
interface RecommendedMediaState {
    booked: boolean | null;
    reRender: boolean;
}
export default class RecommendedMedia extends React.Component<RecommendedMediaProps, RecommendedMediaState> {
    constructor(props) {
        super(props);

        this.state = {
            booked: (this.props.presetBookmarked) ? true : false,
            reRender: false,
        };

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
        console.log("MOUNTED,", this.state.booked)
       
    }
    componentDidUpdate(prevProps, prevState) {
        // if (this.hasMounted && this.state.booked !== prevState.booked) {
            // }
        if(this.state.booked !== prevState.booked) {
            this.handleBookmarked();
        }
    }
     handleBookmarked = async () => {
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
            console.log("Booked = false ")
            let movie = {
                id: id
            }
            let data = {
                email: userEmail,
                movie: movie
            }
            options.method = "DELETE"
            axios({
                method: options.method,
                url: '/api/users/watchlist/delete', // Set the actual URL here
                data: data, // The data for the POST request
                headers: options.headers
            
            }).then(response => {
                console.log(response.data)
                window.location.reload();
            }).catch(error => {
                console.log("OH, something went wrong", error.message)
            })
           
        }

    }
    toggleBookmarked = () => {
        if(this.props.presetBookmarked !== null) {
            // this.props.presetBookmarked = null
        }
        this.setState((prevState) => ({
            booked: !prevState.booked
        }));
    }

    render() {
        return (
            <article className="RecommendedMedia">
                <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${this.props.src})`, backgroundSize: "cover" }} className="Image_wrap">
    
                </div>
                <div className="Content">
                    <p className="Content-title">{this.props.Title}</p>
                    <div className="Content-detail">
                        <p>{this.props.Year}</p>
                        <p>{(this.props.isAdult) ? "18+" : "PG"}</p>
                    </div>
                    <p className="overview">{this.props.Overview}</p>
                    <div className="Content-action">
                        <div onClick={this.toggleBookmarked} className="bookmark">
                            <FontAwesomeIcon icon={
                               (this.props.presetBookmarked || this.state.booked) ? Bookedmarked : unBookedmark
                            } />
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
  
}