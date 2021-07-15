import React from 'react'
import Book from './Book';

class BooksList extends React.Component {
    render() {
        const { books, moveBook, bookShelf } = this.props;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(book => (
                            <Book key={book.id} bookShelf={bookShelf} book={book} moveBook={moveBook} />
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default BooksList