import React, {useEffect, useState} from "react";
import './Book.css';
import {getBook} from "../../../api/Api";

const Book = (props) => {

    const {id} = props;
    const [book, setBook] = useState();

    useEffect(() => {
        getBook(id)
            .then(data => {
                setBook(data);
            })
    }, [props]);

    const returnItemList = (items) => {
        if(!items) {
            return "";
        }
        let itemList = "";
        for (let i = 0; i < items.length; i++) {
            if (i == 0) {
                itemList = items[i];
            } else {
                itemList = `${itemList}, ${items[i]}`;
            }
        }
        return itemList;
    }

    return (
        <div className="wrapperBook">
            <div className="bookImg">
                <img src={book && book.volumeInfo.imageLinks.thumbnail} alt={book && book.volumeInfo.title}/>
            </div>
            <div className="bookContent">
                <div className="bookCategory">{book && returnItemList(book.volumeInfo.categories)}</div>
                <div className="bookTitle">{book && book.volumeInfo.title}</div>
                <div className="bookAuthors">{book && returnItemList(book.volumeInfo.authors)}</div>
                <div className="bookDescription" dangerouslySetInnerHTML={book && {__html: book.volumeInfo.description}}></div>
            </div>
        </div>
    )
}

export default Book;