export default function RegisterLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <section id="Registrations">
            <article className="Register_card">
                {children}
            </article>
        </section>
    )
}