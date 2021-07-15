import React from 'react'

class Header extends React.Component {
    render() {
        const { fetchBooks } = this.props;
        return (
            <div className="list-books-title">
                <h1>MyReads</h1>
                <button onClick={fetchBooks} className="refresh-books">
                    Refresh Books
                </button>
            </div>
        )
    }
}

export default Header