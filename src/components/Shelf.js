import React from 'react'
import BooksList from './BooksList';
import PropTypes from 'prop-types';

class Shelf extends React.Component {
    render() {
        const { books, title, moveBook, bookShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <BooksList books={books} bookShelf={bookShelf} moveBook={moveBook} />
            </div>
        )
    }
}
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired,
    bookShelf: PropTypes.func.isRequired
};

export default Shelf