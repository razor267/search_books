export type BookType = {
    etag: string
    id: string
    volumeInfo: {
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
        title: string
        categories: string[]
        authors: string[]
        description: string
    }
}
type BooksType = {
    items: BookType[]
    totalItems: number
}

const _apiBase = 'https://www.googleapis.com/books/v1/volumes'
const _apiKey = 'AIzaSyB3WXX8QQrwnhmssv0UpQgNiCR1WXpDqdo'

const getBooks = async (str: string, category: string, sort: string, startIndex: number | null): Promise<BooksType> => {

    let url = `${_apiBase}?q=${str ? str : ''}`

    if (category !== 'all') {
        url = `${url}+subject:${category}`
    }

    url = `${url}&orderBy=${sort}&maxResults=30`

    if (startIndex) {
        url = `${url}&startIndex=${startIndex}`
    }

    url = `${url}&key=${_apiKey}`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
}

export const getBook = async (id: string): Promise<BookType> => {
    const url = `${_apiBase}/${id}?key=${_apiKey}`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
}

export default getBooks