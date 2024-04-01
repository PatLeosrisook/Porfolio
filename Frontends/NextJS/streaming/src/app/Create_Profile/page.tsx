export default function CreateProfile() {
    return(
        <>
            <header>
                <h1>Create profile</h1>
            </header>
            <section id="User_info">
                <div id="Avatar">

                </div>
                <section id="Details">
                    <div className="form_group">
                        <input name="username" placeholder="Username"/>
                    </div>
                    <div className="form_group">
                        <input name="name" placeholder="Name"/>
                    </div>
                    <div className="form_group">
                        <input name="email" placeholder="Email"/>
                    </div>
                </section>
            </section>
        </>
    )
}