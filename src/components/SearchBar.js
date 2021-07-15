import React from 'react'
import { Link } from "react-router-dom"

class SearchBar extends React.Component {
    render() {
        const { searchBooks } = this.props
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={(e) => { searchBooks(e.target.value) }} placeholder="Search by title or author" />
                </div>
            </div>
        )
    }
}

export default SearchBar