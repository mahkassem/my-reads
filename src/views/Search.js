import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BooksList from '../components/BooksList'
import SearchBar from '../components/SearchBar'
import debounce from 'lodash.debounce'

class Search extends React.Component {
    state = {
        query: "",
        books: []
    }

    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this);
        this.emitChangeDebounced = debounce(this.searchBooks, 500)
    }

    /* TODO: terminate lodash debounce */
    componentWillUnmount() {
        this.emitChangeDebounced.cancel()
    }
    handleSearch(query) {
        this.emitChangeDebounced(query)
    }


    /* TODO: validate query is not empty
    before making API call*/
    searchBooks = (query) => {
        if (query !== "") {
            this.fetchResults(query)
        }

        if (query === "") {
            this.setState({ books: [], query })
        }
    }

    /* TODO: call search api to get results */
    fetchResults = (query) => {
        this.props.isLoading(true)
        BooksAPI.search(query).then(res => {
            let books = []
            if (res.length) {
                books = res
            }
            this.setState({ books, query })
            this.props.isLoading(false)
        })
    }

    render() {
        const { moveBook, bookShelf } = this.props;
        const { books, query } = this.state;
        return (
            <div className="search-books">
                <SearchBar searchBooks={this.handleSearch} />
                <div className="search-books-results">
                    <BooksList bookShelf={bookShelf} books={books} moveBook={moveBook} />
                    {(books.length === 0 && query !== "") &&
                        <div className="no-results">
                            <p>No results found for keyword: <strong>{query}</strong></p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Search