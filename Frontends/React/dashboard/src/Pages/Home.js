import { data, useLocation } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Card from "../Component/Card";
import { database } from "../helper/MockDatabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function Home() {
    const  navigate = useNavigate()
    const {state} = useLocation();
    const[currentUser, setCurrentUser] = useState({
        user: "",
        email: "",
        role: "",
    })
    const [cards, setCards] = useState([])
    const [refresh, setRefresh] = useState(false); // Trigger re-renders
    const [editingCardId, setEditingCardId] = useState(null)
    const [initialized, setInitialized] = useState(false)
    function handleAddCard() {
        //This just add blank card to dashboard so user can edit content later.
        if (currentUser.role === "ADMIN") {
            let newId = database.AddToAdmin(); // Add the card to the admin list
            updateCards("ADMIN");         // Refresh cards after adding
            setEditingCardId(newId)
        } else {
            let newId = database.AddToUser();
            updateCards("USER");
            setEditingCardId(newId)
        }
    }
    function updateCards(role) {
        if (role.toLowerCase() === "admin") {
            //sort card based on date created. For admin is newest first.
            let sortedCard = [...database.getAdminCard()].concat([...database.getUserCard()]).sort((a,b) => {
                if(a.created < b.created) {
                    return 1
                } 
                return -1 
            })
        setCards([...sortedCard])
        } else {
            setCards([...database.getUserCard()]); //user already oldest first on how card is added to the stack.
        }
        if(initialized) {

            setRefresh(prev => !prev)
        }
    }
    function handleEditCard(id) {
        //which card is being edit at the moment.
        setEditingCardId(id)
    }
    function handleSaveCard(role, id,content) {
        database.editCardContent(id,role,content)
        setEditingCardId(null)
        updateCards(role)
    }
    function handleLogout() {
        localStorage.removeItem('isLoggedIn')
        navigate('/auth/login')
    }
    function init(role) {
        if(role.toLowerCase() == "admin") {
            let sortedCard = [...database.getAdminCard()].concat([...database.getUserCard()]).sort((a,b) => {
                    if(a.created < b.created) {
                        return 1
                    } 
                    return -1 
                })
            setCards([...sortedCard])
        } else {
            setCards([...database.getUserCard()])
        }
        setInitialized(!initialized)
    } 
    useEffect(() => {
       const retrievedObj =  localStorage.getItem(state.user)
       const {name, email, role} = JSON.parse(retrievedObj)
       setCurrentUser({
            user: name,
            email: email,
            role: role
       })
       if(initialized == false) {
           init(role)
       }
    },[state.user, refresh])
    return (
        <section id="Home">
            
            <h2 onClick={handleLogout} >{currentUser.email} <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></h2>
            <section id="container">
                <h3>Memo cards <span>{(editingCardId) ? `(${cards.length - 1} + 1)` : `(${cards.length})`}</span></h3>
                <div id="Cards_wrapper">
                    {
                        cards.map(card => {
                            return <Card
                                // key={`${currentUser.role}-${card.id}`}
                                id={card.id}
                                role={card.role}
                                content={card.content}
                                count={card.order}
                                editCard={handleEditCard}
                                saveCard={handleSaveCard}
                                editingCardId={editingCardId}
                            />
                        })
                    }
                    {
                        (editingCardId) ? "" : <div onClick={handleAddCard} className="Card place-holder">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    }
                    
                </div>
            </section>
        </section>
    )
}