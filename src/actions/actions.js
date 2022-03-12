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

const editSort = (sort) => {
    return {
        type: 'EDIT_SORT',
        sort
    }
}

const clearBooks = () => {
    return {
        type: 'CLEAR_BOOKS'
    }
}

export {
    addAllBooks,
    editSearchStr,
    editSearchCategory,
    editBooksCount,
    editSort,
    clearBooks
};