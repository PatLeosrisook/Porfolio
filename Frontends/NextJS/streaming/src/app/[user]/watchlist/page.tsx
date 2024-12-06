'use client';
import { useState, useEffect, useContext } from "react";
import EmptyState from "@/Component/EmptyState";
import axios from "axios";
import RecommendedMedia from "@/Component/RecommendedMedia";
import { useUser } from '@/helper/userContext';
import { ToastContainer } from 'react-toastify';
export default function WatchList() {
    const { currentUser, currentEmail } = useUser();
    const [currentCategory, setCurrentCategory] = useState("cate-movie");
    const [list, setList] = useState<Array>([])

    function handleCategoryChange(e : Event) {
        let current = e.target.getAttribute('class'); 
        setCurrentCategory(current.split(" ")[0])
    }
    function loadWatchlist() {
        // fetch watchlist from API
       axios.get('/api/users/watchlist/get', {
        params: {
            email: currentEmail
        }
    }).then(response => {
        // let shows = response.data.watchlist.filter(tv => tv.type == '')
        console.log(response.data.watchlist)
        setList(response.data.watchlist)
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
        if(list.length == 0) {

            loadWatchlist() // load watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly  // TODO: fetch watchlist from API and set list state accordingly
        }
    },[currentCategory, currentEmail, list])
    return(
        <section id="watchlist">
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            <section id="watchlist-cate">
                <p onClick={e=>handleCategoryChange(e)} className="cate-movie selected">Movies</p>
                <p onClick={e=>handleCategoryChange(e)} className="cate-tv">Tv Shows</p>
            </section>
            <section className="content-body">
                <section className="content-wrapper">
                    {

                        (list.length > 0) ? list.map(item => {
        
                            return <RecommendedMedia
                                Title={item.title}
                                Year={item.year}
                                Overview={item.overview}
                                isAdult={item.adult}
                                Type={item.type}
                                userEmail={currentEmail}
                                id={item.id}
                                src={item.src}
                                presetBookmarked={item.isBooked}
                                key={item.id}
                                Genre={item.genre}
                            />
                        }) : 
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