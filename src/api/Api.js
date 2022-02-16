const getBooks = async (str) => {

    const _apiBase = 'https://www.googleapis.com/books/v1/volumes';
    const _apiKey = 'AIzaSyB3WXX8QQrwnhmssv0UpQgNiCR1WXpDqdo';
    const url = `${_apiBase}?q=${str}&key=${_apiKey}&maxResults=30`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
};

export default getBooks;