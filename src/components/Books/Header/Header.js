import React from 'react';
import './Header.css'
import getBooks from "../../../api/Api";

const Header = () => {

    getBooks()
        .then(data => console.log(data));

    return (
        <div className="header_wrapper">
            <h1>Search for books</h1>
            <div>
                <input type="text"/>
            </div>
            <div>
                <span>Categories</span>
                <span>
                    <select type="text"/>
                </span>
                <span>Sorting by</span>
                <span>
                    <select type="text"/>
                </span>
            </div>

        </div>
    )

};

export default Header;