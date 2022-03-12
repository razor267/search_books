import React from 'react';
import Header from "./Header/Header";
import Content from "./Content/Content";
import './Books.css';

const Books = () => {

    return (
        <div className="wrapper">
            <div className="header"><Header/></div>
            <div className="content"><Content/></div>
        </div>
    )

};

export default Books;