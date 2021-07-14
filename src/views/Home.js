import React from 'react'
import Header from '../components/Header'
import SearchButton from '../components/SearchButton';
import ShelvesList from '../components/ShelvestList';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const { books, moveBook, fetchBooks, bookShelf } = this.props
        return (
            <div className="list-books">
                <Header fetchBooks={fetchBooks} />
                <ShelvesList bookShelf={bookShelf} books={books} moveBook={moveBook} />
                <SearchButton />
            </div>
        )
    }
}

export default Home