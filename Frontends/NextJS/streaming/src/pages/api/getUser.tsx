export async function getStaticProps() {
    let user = await axios.get('/api/users/me')
    return {
        props: {
            currentUser: user.data.data.username
        }
    }
}