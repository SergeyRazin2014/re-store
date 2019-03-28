import React, { Fragment } from 'react';

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, author } = book;
    return (
        <div>
            <span>{title}</span> | <span>{author}</span> | <button onClick={onAddedToCart} >купить</button>
        </div>
    );
}

export default BookListItem; 