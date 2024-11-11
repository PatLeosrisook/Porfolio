'use client';
import { useState, useEffect, useContext } from "react";
import EmptyState from "@/Component/EmptyState";
import axios from "axios";
import { useUser } from '@/helper/userContext';
export default function WatchList() {
    const { currentUser, currentEmail } = useUser();
    const [currentCategory, setCurrentCategory] = useState("cate-movie");
    const [list, setList] = useState([])

    function handleCategoryChange(e : Event) {
        let current = e.target.getAttribute('class'); 
        setCurrentCategory(current.split(" ")[0])
    }
    function loadWatchlist() {
        // fetch watchlist from API
        // setList(response data)
       axios.get('/api/users/watchlist/get', {
        params: {
            email: currentEmail
        }
    }).then(response => {

       }).catch(error => {
        console.log("Error fetching watchlist")
       })
    }
    useEffect(() => {

        let currentCate = document.querySelector(`.${currentCategory}`)
        if(currentCategory == "cate-movie") {
            document.querySelector('.cate-tv')?.classList.remove('selected')
            currentCate?.classList.add('selected')
        } else {
            document.querySelector('.cate-movie')?.classList.remove('selected')
            currentCate?.classList.add('selected')
        }
        loadWatchlist() // load watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly
    },[currentCategory])
    return(
        <section id="watchlist">
            <section id="watchlist-cate">
                <p onClick={e=>handleCategoryChange(e)} className="cate-movie selected">Movies</p>
                <p onClick={e=>handleCategoryChange(e)} className="cate-tv">Tv Shows</p>
            </section>
            <section className="content-body">
                <section className="content-wrapper">
                    {
                        (list.length > 0) ? list : 
                        <EmptyState
                            src={"No_fav.svg"}
                            alt="Empty watch list icon"
                            width={120}
                            height={120}
                            title={"You haven't saved any thing :("}
                            description={"Try browsing something then all your saved will appear here."}
                        />        
                    }
                </section>
            </section>
        </section>
    )
}