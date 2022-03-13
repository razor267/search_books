import React, {useEffect, useState} from "react";
import './Book.css';
import {getBook} from "../../../api/Api";

const Book = (props) => {

    const {id} = props;
    const [book, setBook] = useState();

    useEffect(()=>{
        getBook(id)
            .then(data => {
                setBook(data);
            })
    },[]);

    console.log(book);

    return (
        <div className="wrapperBook">
            <div className="bookImg">
                <img src={book.volumeInfo.imageLinks.large} alt={book.volumeInfo.title}/>
            </div>
        </div>
    )
}

export default Book;