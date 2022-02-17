import React, {useEffect} from 'react';
import './Header.css'
import getBooks from "../../../api/Api";
import {addAllBooks, editSearchStr} from "../../../actions/actions";
import {connect} from "react-redux";

const Header = (props) => {

    const {addAllBooks, books, searchStr, editSearchStr} = props;

    console.log(books);

    const searchBooks = (str) => {
        getBooks(str)
            .then(data => addAllBooks(data.items))
            .finally(()=>editSearchStr(""));
    };

    return (
        <div className="header_wrapper">
            <h1>Search for books</h1>
            <div>
                <span><input
                    onChange={(e)=>editSearchStr(e.currentTarget.value)}
                    type="text"
                    value={searchStr}
                    onKeyDown={(e)=>e.keyCode == 13 ? searchBooks(searchStr) : null}
                /></span>
                <span><button onClick={()=>searchBooks(searchStr)}>Поиск</button></span>
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

const mapStateToProps = (state) => {
    return {
        books: state.books,
        searchStr: state.searchStr
    }
};

const mapDispatchToProps = {
    addAllBooks,
    editSearchStr
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);