import React from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

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