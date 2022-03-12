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

export {
    addAllBooks,
    editSearchStr,
    editSearchCategory
};