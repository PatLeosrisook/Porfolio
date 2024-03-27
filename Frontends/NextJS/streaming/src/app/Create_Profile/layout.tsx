import '../CSS/Dashboard.css'
export default function CreateProfileLayout({children} : {children : React.ReactNode}) {
    return (
        <section id="CreateProfile">
            <div id="Creator_card">
                {children}
            </div>
        </section>
    )
}