import React from 'react'
import './BookItem.css'
import {Link} from 'react-router-dom'
import {ItemList} from '../../../helpers/helpers'

type PropsType = {
    authors: string[]
    img: string
    title: string
    categories: string[]
    id: string
}
const BookItem: React.FC<PropsType> = (props) => {

    const {authors, img, title, categories, id} = props

    return (
        <Link to={`book/${id}`} className="wrapperBookItem">
            {img ? <div className="bookItemImg"><img src={img} alt={title}/></div> : ''}
            {categories ? <div className="bookItemCategory">{categories[0]}</div> : ''}
            {title ? <div className="bookItemTitle">{title}</div> : ''}
            {authors ? <div className="bookItemAuthors">{ItemList(authors)}</div> : ''}
        </Link>
    )
}

export default BookItem