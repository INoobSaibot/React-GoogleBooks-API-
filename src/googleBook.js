import React, { Component } from 'react';

class GoogleBook extends Component {
    constructor(props) {
        super();
    }
    render() {
        let book = this.props.item.volumeInfo;
        return (
            <div>
                <ul>
                    <li>Author: {book.authors}</li>
                    <li>Title: {book.title}</li>
                </ul>
                <p className="details">{book.description}</p>
            </div>
        );
    }
}

export default GoogleBook