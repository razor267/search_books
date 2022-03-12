import React from "react";
import './BookItem.css';

const BookItem = (props) => {

    const {authors, img, title, categories} = props;

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
        <div className="wrapperBook">
            {img ? <div className="bookImg"><img src={img} alt={title}/></div> : ""}
            {categories ? <div className="bookCategory">{categories[0]}</div> : ""}
            {title ? <div className="bookTitle">{title}</div> : ""}
            {authors ? <div className="bookAuthors">{returnAuthors(authors)}</div> : ""}
        </div>
    )
}

export default BookItem;