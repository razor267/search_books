import React, {useEffect, useState} from 'react'
import './Book.css'
import {BookType, getBook} from '../../../api/Api'
import {Spinner} from '../../Spinner/Spinner'
import {ItemList} from '../../../helpers/helpers'

type PropsType = {
    id: string
}
const Book: React.FC<PropsType> = (props) => {

    const {id} = props
    const [book, setBook] = useState<BookType>()

    useEffect(() => {
        getBook(id)
            .then(data => {
                setBook(data)
            })
    }, [props])

    if (!book) {
        return <Spinner/>
    }

    return (
        <div className="wrapperBook">
            <div className="bookImg">
                <img src={book && book.volumeInfo.imageLinks.thumbnail} alt={book && book.volumeInfo.title}/>
            </div>
            <div className="bookContent">
                <div className="bookCategory">{book && ItemList(book.volumeInfo.categories)}</div>
                <div className="bookTitle">{book && book.volumeInfo.title}</div>
                <div className="bookAuthors">{book && ItemList(book.volumeInfo.authors)}</div>
                <div className="bookDescription"
                     dangerouslySetInnerHTML={book && {__html: book.volumeInfo.description}}></div>
            </div>
        </div>
    )
}

export default Book