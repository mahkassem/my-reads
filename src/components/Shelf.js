import React from 'react'
import BooksList from './BooksList';

class Shelf extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

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

export default Shelf