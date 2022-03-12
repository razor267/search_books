import React from 'react';
import Header from "./Header/Header";
import Content from "./Content/Content";
import './Books.css';
import getBooks from "../../api/Api";
import {addAllBooks, editBooksCount, editSearchCategory, editSearchStr} from "../../actions/actions";
import {connect} from "react-redux";

const Books = (props) => {

    const {addAllBooks, searchStr, searchCategory, books, editSearchStr, editSearchCategory, booksCount, editBooksCount} = props;

    console.log(books);

    const searchBooks = (str, category) => {
        getBooks(str, category)
            .then(data => {
                addAllBooks(data.items);
                editBooksCount(data.totalItems);
            })
            .finally(() => {
                editSearchStr("");
                editSearchCategory("all");
            });
    };

    return (
        <div className="wrapper">
            <div className="header">
                <Header
                    searchBooks={searchBooks}
                    searchStr={searchStr}
                    editSearchStr={editSearchStr}
                    searchCategory={searchCategory}
                    editSearchCategory={editSearchCategory}
                />
            </div>
            <div className="booksCount">Found {booksCount} results</div>
            <div className="content">
                <Content books={books}/>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        searchStr: state.searchStr,
        searchCategory: state.searchCategory,
        booksCount: state.booksCount
    }
};

const mapDispatchToProps = {
    addAllBooks,
    editSearchStr,
    editSearchCategory,
    editBooksCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);