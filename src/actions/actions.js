const addAllBooks = (books) => {
    return {
        type: 'ADD_ALL_BOOKS',
        books
    };
};

const editSearchStr = (str) => {
    return {
        type: 'EDIT_SEARCH_STR',
        str
    };
};

const editSearchCategory = (category) => {
    return {
        type: 'SEARCH_CATEGORY',
        category
    }
}

const editBooksCount = (count) => {
    return {
        type: 'BOOKS_COUNT',
        count
    }
}

export {
    addAllBooks,
    editSearchStr,
    editSearchCategory,
    editBooksCount
};