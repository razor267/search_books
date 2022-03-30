const _apiBase = 'https://www.googleapis.com/books/v1/volumes'
const _apiKey = 'AIzaSyB3WXX8QQrwnhmssv0UpQgNiCR1WXpDqdo'

type BookType = {

}
const getBooks = async (str: string, category: string, sort: string, startIndex: number | null) => {

    // let url = `${_apiBase}?q=${str}&key=${_apiKey}&maxResults=30`;
    let url = `${_apiBase}?q=${str ? str : ''}`

    if (category !== 'all') {
        url = `${url}+subject:${category}`
    }

    url = `${url}&orderBy=${sort}`

    url = `${url}&key=${_apiKey}`

    if (startIndex) {
        url = `${url}&startIndex=${startIndex}`
    }

    url = `${url}&maxResults=30`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
}

export const getBook = async (id: string) => {
    const url = `${_apiBase}/${id}?key=${_apiKey}`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
}

export default getBooks