import React from 'react';
import Header from "./Header/Header";
import Content from "./Content/Content";
import './Books.css';
import getBooks from "../../api/Api";
import {
    addAllBooks,
    clearBooks,
    editBooksCount,
    editSearchCategory,
    editSearchStr,
    editSort
} from "../../actions/actions";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import Book from "./Book/Book";

const Books = (props) => {

    const {bookId} = useParams();

    const {addAllBooks, searchStr, searchCategory, books, editSearchStr, editSearchCategory, booksCount, editBooksCount, sort, editSort, clearBooks} = props;

    console.log(books);

    const searchBooks = (str, category, sort, startIndex) => {
        if (!startIndex) {
            clearBooks();
        }
        getBooks(str, category, sort, startIndex)
            .then(data => {
                addAllBooks(data.items);
                editBooksCount(data.totalItems);
            })
            .finally(() => {
                // editSearchStr("");
                // editSearchCategory("all");
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
                    sort={sort}
                    editSort={editSort}
                />
            </div>
            {!bookId && <div className="booksCount">Found {booksCount} results</div>}
            <div className="content">
                {bookId ? <Book id={bookId}/> : <Content books={books}/>}

            </div>
            {booksCount > books.length && !bookId ?
                <div className="paginator" onClick={() => searchBooks(searchStr, searchCategory, sort, books.length)}>
                    More items
                </div> : null}
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        searchStr: state.searchStr,
        searchCategory: state.searchCategory,
        booksCount: state.booksCount,
        sort: state.sort
    }
};

const mapDispatchToProps = {
    addAllBooks,
    editSearchStr,
    editSearchCategory,
    editBooksCount,
    editSort,
    clearBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);