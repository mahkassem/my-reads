import React from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import BooksList from '../components/BooksList';

class Search extends React.Component {
    state = {
        query: "",
        books: []
    }

    searchBooks = (query) => {

        if (query !== "") {
            this.fetchResults(query)
        }

        if (query === "") {
            this.setState({ books: [] })
        }
    }

    fetchResults = (query) => {
        BooksAPI.search(query).then(res => {
            let books = []
            if (res.length) {
                books = res
            }
            this.setState({ books })
        })
    }

    render() {
        const { moveBook, bookShelf } = this.props;
        const { books } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={(e) => { this.searchBooks(e.target.value) }} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList bookShelf={bookShelf} books={books} moveBook={moveBook} />
                </div>
            </div>
        )
    }
}

export default Search