import React from 'react';
import BookList from '../book-list';


const HomePage = () => {
    return (
        <div><BookList /*books={booksTest}*/ /></div> //ТЕПЕРЬ МОЖНО ВЫЗЫВАТЬ ЭТО БЕЗ ПАРАМЕТРОВ
    )
};



export default HomePage;