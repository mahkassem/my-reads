import React from 'react'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    handleChange = (book, e) => {
        this.props.moveBook(book, e.target.value)
    }

    availableImage = (book) => {
        if (book.imageLinks) {
            return book.imageLinks.smallThumbnail
        } else {
            return null
        }
    }

    render() {
        const { book, bookShelf } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.availableImage(book)}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={bookShelf(book)} onChange={(e) => this.handleChange(book, e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors &&
                            book.authors.map(author => (
                                <span key={author}>{author}</span>
                            ))
                        }
                    </div>
                </div>
            </li>
        )
    }
}

export default Book