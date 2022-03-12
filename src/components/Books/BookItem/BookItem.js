import React from "react";
import './BookItem.css';

const BookItem = (props) => {
    return (
        <div className="wrapperBook">
            {props.img ? <div className="bookImg"><img src={props.img } alt={props.title}/></div> : ""}
            {props.categories ? <div className="bookCategory">{props.categories[0]}</div> : ""}
            {props.title ? <div className="bookTitle">{props.title}</div> : ""}
            {props.authors ? <div className="bookAuthors">{props.authors[0]}</div> : ""}
        </div>
    )
}

export default BookItem;