
export function Chat() {
    return(
        <section>
            <div id="Chat">
                <div className="form_group">
                    <label for="name">Name</label>
                    <input name="name" type="text"/>
                </div>
                <div className="form_group">
                    <label for="message">message</label>
                    <textarea name="message"></textarea>
                </div>
                
            </div>
        </section>
    )
}