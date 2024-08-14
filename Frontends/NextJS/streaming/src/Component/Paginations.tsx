
export default function Pagination ({items, currentPage, pageSize, onPageChange} : {items: number, currentPage: number, pageSize : number, onPageChange: Function}) {
    const pageCount = Math.ceil(items / pageSize);

    if (pageCount <= 1) return null;
    const pages = Array.from({length: pageCount}, (_, index) => index + 1);
    return (
        <section>
            <ul>
                {
                    pages.map(page => {
                        return (
                            <li key={page} className={currentPage === page? "active" : ""} onClick={() => onPageChange(page)}>
                                {page}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}