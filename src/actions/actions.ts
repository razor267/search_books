import {InferActionsTypes} from '../store'
import {BookType} from '../api/Api'

export type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    addAllBooks: (books: BookType[]) => ({
        type: 'ADD_ALL_BOOKS',
        books
    } as const),
    editSearchStr: (str:string) => ({
        type: 'EDIT_SEARCH_STR',
        str
    } as const),
    editSearchCategory: (category:string) => ({
        type: 'SEARCH_CATEGORY',
        category
    } as const),
    editBooksCount: (count:number) => ({
        type: 'BOOKS_COUNT',
        count
    } as const),
    editSort: (sort:string) => ({
            type: 'EDIT_SORT',
            sort
    } as const),
    clearBooks: () => ({
            type: 'CLEAR_BOOKS'
    } as const)
}