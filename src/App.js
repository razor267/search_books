import React from 'react';
import Books from "./components/Books/Books";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Book from "./components/Books/Book/Book";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/book/:bookId" element={<Books/>}/>
                <Route path="/" element={<div className="app-wrapper"><Books/></div>}/>
            </Routes>
        </Router>
    );
}

export default App;
