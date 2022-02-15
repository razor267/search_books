const getBooks = async () => {

    const _apiBase = 'https://www.googleapis.com/books';
    const urlTest = '/v1/mylibrary/bookshelves/7/volumes'
    const _apiKey = 'AIzaSyB3WXX8QQrwnhmssv0UpQgNiCR1WXpDqdo';

    // const res = await fetch(`${_apiBase}${urlTest}?key=${_apiKey}`);
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=book&key=AIzaSyB3WXX8QQrwnhmssv0UpQgNiCR1WXpDqdo&maxResults=30');

    if (!res.ok) {
        throw new Error(`Could not fetch ${urlTest}, received ${res.status}`);
    }
    return await res.json();
};

export default getBooks;