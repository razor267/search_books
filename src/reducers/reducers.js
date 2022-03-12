const initialState = {
    books: [],
    searchStr: "",
    searchCategory: "all",
    booksCount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_BOOKS':
            return {
                ...state,
                books: action.books
            }
        case 'EDIT_SEARCH_STR':
            return {
                ...state,
                searchStr: action.str
            }
        case 'SEARCH_CATEGORY':
            return {
                ...state,
                searchCategory: action.category
            }
        case 'BOOKS_COUNT':
            return {
                ...state,
                booksCount: action.count
            }
        default:
            return state;
    }
};

export default reducer;