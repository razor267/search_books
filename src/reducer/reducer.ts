import {ActionsTypes} from '../actions/actions'
import {BookType} from '../api/Api'

export type StateType = typeof initialState
const initialState = {
    books: [] as BookType[],
    searchStr: '',
    searchCategory: 'all',
    booksCount: 0,
    sort: 'relevance'
}

const reducer = (state = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case 'ADD_ALL_BOOKS':
            for (let i = 0; i < action.books.length; i++) {
                state.books.push(action.books[i])
            }
            return state
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
        case 'EDIT_SORT':
            return {
                ...state,
                sort: action.sort
            }
        case 'CLEAR_BOOKS':
            return {
                ...state,
                books: []
            }
        default:
            return state
    }
}

export default reducer