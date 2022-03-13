import React from "react";
import './BookItem.css';
import {Link} from "react-router-dom";

const BookItem = (props) => {

    const {authors, img, title, categories, id} = props;

    const returnAuthors = (authors) => {
        let authorsList = "";
        for (let i = 0; i < authors.length; i++) {
            if (i == 0) {
                authorsList = authors[i];
            } else {
                authorsList = `${authorsList}, ${authors[i]}`;
            }
        }
        return authorsList;
    }

    return (
        <Link to={`book/${id}`} className="wrapperBookItem">
            {img ? <div className="bookItemImg"><img src={img} alt={title}/></div> : ""}
            {categories ? <div className="bookItemCategory">{categories[0]}</div> : ""}
            {title ? <div className="bookItemTitle">{title}</div> : ""}
            {authors ? <div className="bookItemAuthors">{returnAuthors(authors)}</div> : ""}
        </Link>
    )
}

export default BookItem;