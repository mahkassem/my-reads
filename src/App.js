import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import './App.css'
import Home from './views/Home'
import Search from './views/Search'
import loading from './icons/loading.gif'
class BooksApp extends React.Component {
  state = {
    books: [],
    loading: false
  }

  componentDidMount() {
    this.fetchBooks()
  }

  /* TODO: Get all books list from the API */
  fetchBooks = () => {
    this.isLoading(true)
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
        this.isLoading(false)
      })
  }

  /* TODO: Move a book to another shelf
  through the API, then update state books */
  moveBook = (book, shelf) => {
    this.isLoading(true)
    BooksAPI.update(book, shelf).then(res => {
      /* Now we move the book for it's new
      shelf in App state */
      this.fetchBooks()
    });
  }

  /* TODO: show loading blocker overlayer */
  isLoading = (bool) => {
    this.setState({ loading: bool })
  }



  /* TODO: Select book current shelf or select
  none by default */
  bookShelf = (book) => {
    let shelf = 'none'
    this.state.books.map(myBook => {
      if (myBook.id === book.id) {
        shelf = myBook.shelf
      }
      return myBook
    })
    return shelf
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home books={this.state.books} moveBook={this.moveBook} bookShelf={this.bookShelf} fetchBooks={this.fetchBooks} />
        )} />
        <Route exact path='/search'>
          <Search moveBook={this.moveBook} bookShelf={this.bookShelf} />
        </Route>
        {this.state.loading &&
          <div className="loading-indicator">
            <img src={loading} alt="loading" />
          </div>
        }
      </div>
    )
  }
}

export default BooksApp
