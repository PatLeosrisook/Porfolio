import { ChatBubble } from "./ChatBubble"
export function Chat() {
    let handleKeyPress = (e) => {
        console.log(e)
        if(e.key == "Enter") {
            console.log("Enter")
        }
    }
    return(
        <section id="Chat">
            <div id="message_area">

            </div>
            <div className="card">
                <div className="form_group">
                    
                    <textarea onKeyPress={handleKeyPress} name="Message"></textarea>
                </div>
            </div>
        </section>
    )
}