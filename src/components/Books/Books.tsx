import React, {useEffect, useState} from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import './Books.css'
import getBooks from '../../api/Api'
import {actions} from '../../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import Book from './Book/Book'
import {Spinner} from '../Spinner/Spinner'
import {StateType} from '../../reducer/reducer'

const Books: React.FC = () => {

    const [load, setLoad] = useState(false)
    const {bookId} = useParams()

    useEffect(() => {
        return () => setLoad(true)
    }, [])

    const books = useSelector((state: StateType) => state.books)
    const searchStr = useSelector((state: StateType) => state.searchStr)
    const searchCategory = useSelector((state: StateType) => state.searchCategory)
    const booksCount = useSelector((state: StateType) => state.booksCount)
    const sort = useSelector((state: StateType) => state.sort)

    const dispatch = useDispatch()

    const searchBooks = (str: string, category: string, sort: string, startIndex: number | null) => {
        setLoad(true)
        if (!startIndex) {
            dispatch(actions.clearBooks())
        }
        getBooks(str, category, sort, startIndex)
            .then(data => {
                dispatch(actions.addAllBooks(data.items))
                dispatch(actions.editBooksCount(data.totalItems))
                setLoad(false)
            })
            .finally(() => {
                // editSearchStr("");
                // editSearchCategory("all");
            })
    }

    return (
        <div className="wrapper">
            <div className="header">
                <Header
                    searchBooks={searchBooks}
                    searchStr={searchStr}
                    searchCategory={searchCategory}
                    sort={sort}
                />
            </div>
            {!bookId && <div className="booksCount">Found {booksCount} results</div>}
            <div className="content">
                {load && <Spinner/>}
                {bookId ? <Book id={bookId}/> : <Content books={books}/>}
            </div>
            {booksCount > books.length && !bookId ?
                <div className="paginator" onClick={() => searchBooks(searchStr, searchCategory, sort, books.length)}>
                    More items
                </div> : null}
        </div>
    )
}

export default Books