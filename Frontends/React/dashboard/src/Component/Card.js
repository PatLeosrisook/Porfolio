import { useState } from "react"

export default function Card({id, role, content, count, editCard, saveCard, editingCardId, deleteCard}) {

    const [cardContent, setCardContent] = useState("")
    const [editMode, setEditMode] = useState(false)
    function toggleEditMode() {
        setEditMode(!editMode)
    }
    function handleCardContent(e) {
        setCardContent(e.target.value)
    }
    function handleDelete(role,id) {
        deleteCard(role,id)
    }
    return(
        <article className="Card">
            <div className="card-side-bar">
                <div className="card-identity">
                    <p>{(role.toLowerCase() == 'admin') ? "ADMIN" : "MEMO"}-{count}</p>
                    <div className={`toast ${role}-toast`}>
                       <p>{role}</p> 
                    </div>
                </div>
                <p onClick={(e) => saveCard(role, id, cardContent)} className={` ${(editingCardId == id) ? 'visible' : '' } card-save-btn`}>Save</p>
                <p onClick={(e) => handleDelete(role,id ) }  >Delete</p>
            </div>
            <div onClick={(e) => editCard( id)} className={`${(editingCardId == id) ? 'focus-textarea' : '' } card-text-area`}>
                <textarea value= { editMode ? cardContent : content} onClick={toggleEditMode} onChange={e => handleCardContent(e)} className={(editingCardId == id) ? 'visible' : (content.length > 0) ? 'visible' : ''}/>
            </div>
        </article>
    )
}