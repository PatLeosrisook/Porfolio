import { useLocation } from "react-router"
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
        setEditingCardId(404) // dummie id
    }
    function handleEditCard(id) {
        //which card is being edit at the moment.
        setEditingCardId(id)
    }
    function handleSaveCard(role, id,content) {
        if(id === 404) {
            //newly add card
            database.addCard(role.toLowerCase(), content)
        } else {
            //for editing existing cards
            database.editCardContent(id,role,content)
        }
        setEditingCardId(null)
        updateCards(role)
    }
    function updateCards(role) {
        if (role.toLowerCase() === "admin") {
            setCards([...database.getAllCards()])
        } else {
            setCards([...database.getUserCard()]); //user already oldest first on how card is added to the stack.
        }
        setInitialized(!initialized)
        setRefresh(prev => !prev)
        
    }
   
    
    function handleLogout() {
        localStorage.removeItem('isLoggedIn')
        navigate('/auth/login')
    }

    useEffect(() => {
       const retrievedObj =  localStorage.getItem(state.user)
       const {name, email, role} = JSON.parse(retrievedObj)
       setCurrentUser({
            user: name,
            email: email,
            role: role
       })
       if(initialized === false) {
            //loading all cards
            updateCards(role)
        }
    },[refresh])
    return (
        <section id="Home">
            
            <h2 onClick={handleLogout} >{currentUser.email} <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span></h2>
            <section id="container">
                <h3>Memo cards <span>{(editingCardId) ? `(${cards.length} + 1)` : `(${cards.length})`}</span></h3>
                <div id="Cards_wrapper">
                    {
                        cards.map((card,index) => {
                            return <Card
                                key={`${currentUser.role}-${card.id}-${index}`}
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
                        (editingCardId === 404) ? <Card 
                                id={editingCardId} 
                                content={""} 
                                role={currentUser.role} 
                                count={(currentUser.role == "ADMIN") ? database.getAdminOrder() + 1 : database.getUserOrder() + 1}
                                editCard={handleEditCard}
                                saveCard={handleSaveCard}
                                editingCardId={editingCardId} /> 
                                : <div onClick={handleAddCard} className="Card place-holder">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    }
                    
                </div>
            </section>
        </section>
    )
}