import React from "react";
import './BookItem.css';

const BookItem = (props) => {
    return (
        <div className="wrapperBook">
            <img src={props.img } alt=""/>
            {props.title ? props.title : ""}
            {props.categories ? props.categories[0] : ""}
            {props.authors ? props.authors[0] : ""}
        </div>
    )
}

export default BookItem;