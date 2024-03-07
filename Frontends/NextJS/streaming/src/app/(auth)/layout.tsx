export default function RegisterLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <section id="Registrations">
            <form className="Register_card">
                {children}
            </form>
        </section>
    )
}