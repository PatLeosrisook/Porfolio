
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function Genre() {
    const router = useRouter() 
    const {genre} = router.query

    useEffect(() => {
        
    })
    return(
        <section>
            <h1>Sub movie</h1>
        </section>
    )
}