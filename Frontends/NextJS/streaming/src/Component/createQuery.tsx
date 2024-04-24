let createQuery = (name : string, value : string) => {
    const params = new URLSearchParams()
    params.set(name, value)
    return params.toString()
}
module.exports = {createQuery}