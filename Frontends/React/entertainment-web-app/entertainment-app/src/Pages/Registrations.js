export default function Registration({title, children}) {
    return (
        <section className={`Register ${title}`}>
            <h1>{title}</h1>
            {
                children
            }
        </section>
    )
}