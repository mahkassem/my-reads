import React from 'react'
import Shelf from './Shelf';

class ShelvesList extends React.Component {
    state = {
        shelves: [
            {
                id: "currentlyReading",
                title: "Currently Reading"
            },
            {
                id: "wantToRead",
                title: "Want To Read"
            },
            {
                id: "read",
                title: "Read"
            }
        ]
    }

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        const { books, moveBook, bookShelf } = this.props
        const { shelves } = this.state
        return (
            <div className="list-books-content">
                <div>
                    {shelves.map(
                        shelf => (
                            <Shelf key={shelf.id} bookShelf={bookShelf} moveBook={moveBook} books={books.filter(book => book.shelf === shelf.id)} title={shelf.title} />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default ShelvesList