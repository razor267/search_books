import React from 'react';
import './Header.css';

const Header = (props) => {

    const {searchBooks, searchStr, editSearchStr, searchCategory, editSearchCategory} = props;

    return (
        <div className="header_wrapper">
            <h1>Search for books</h1>
            <div className="search">
                <span>
                    <input
                        onChange={(e) => editSearchStr(e.currentTarget.value)}
                        type="text"
                        value={searchStr}
                        onKeyDown={(e) => e.keyCode == 13 ? searchBooks(searchStr, searchCategory) : null}
                    />
                </span>
                <span><button onClick={() => searchBooks(searchStr, searchCategory)}>Поиск</button></span>
            </div>
            <div className="filters">
                <span className="categories">Categories</span>
                <span className="categoriesSelect">
                    <select name="categories"
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
                <span className="sort">Sorting by</span>
                <span>
                    <select name="sort">
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </span>
            </div>
        </div>
    )

};

export default Header;