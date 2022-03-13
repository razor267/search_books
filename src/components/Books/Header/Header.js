import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = (props) => {

    const {searchBooks, searchStr, editSearchStr, searchCategory, editSearchCategory, sort, editSort} = props;

    return (
        <div className="header_wrapper">
            <h1>Search for books</h1>
            <div className="search">
                <span>
                    <input
                        onChange={(e) => editSearchStr(e.currentTarget.value)}
                        type="text"
                        value={searchStr}
                        onKeyDown={(e) => e.keyCode == 13 ? searchBooks(searchStr, searchCategory, sort) : null}
                    />
                </span>
                <Link to='/'>
                    <button onClick={() => searchBooks(searchStr, searchCategory, sort)}>Поиск</button>
                </Link>
            </div>
            <div className="category">
                <span className="categories">Categories</span>
                <span className="categoriesSelect">
                    <select
                        name="categories"
                        onChange={(e) => editSearchCategory(e.currentTarget.value)}
                        value={searchCategory}
                    >
                        <option>all</option>
                        <option>art</option>
                        <option>biography</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                    </span>
            </div>
            <div className="sorting">
                <span className="sort">Sorting by</span>
                <select
                    name="sort"
                    onChange={(e) => editSort(e.currentTarget.value)}
                    value={sort}
                >
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </div>
    )

};

export default Header;