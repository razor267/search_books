import React from 'react'
import BookItem from '../BookItem/BookItem'
import './Content.css'
import {BookType} from '../../../api/Api'

type PropsType = {
    books: BookType[]
}
const Content: React.FC<PropsType> = (props) => {

    const {books} = props

    return (
        <div className="wrapperContent">
            {books?.map((b: BookType) => {
                return (
                    <BookItem
                        key={b.etag}
                        id={b.id}
                        img={b.volumeInfo.imageLinks ? b.volumeInfo.imageLinks.smallThumbnail : ''}
                        title={b.volumeInfo.title}
                        categories={b.volumeInfo.categories}
                        authors={b.volumeInfo.authors}
                    />
                )
            })}
        </div>
    )
}

export default Content