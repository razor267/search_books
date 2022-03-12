const initialState = {
    books: [],
    searchStr: "",
    searchCategory: "all"
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
        default:
            return state;
    }
};

export default reducer;