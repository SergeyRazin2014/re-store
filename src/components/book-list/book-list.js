import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



const BookList = ({ books, onAddedToCart }) => {

    let bookListItems = books.map((book) => {
        return <li key={book.id} ><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} /></li>
    })

    return (
        <ul>
            {bookListItems}
        </ul>
    )

}


class BookListContainer extends React.Component {

    //МЕТОД ЖИЗНЕННОГО ЦИКЛА
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {

        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}


const mapStateToProps = ({ books, loading, error }) => { //БЕРЕТ ДАННЫЕ ИЗ ГЛОБАЛЬНОГО СТЕЙТА И ПЕРЕДАЕТ ИХ ДАННОМУ КОМПОНЕНТУ
    return { books, loading, error }
};

//ОПЯТЬ ДЕЛАЕМ mapDispatchToProps ФУНКЦИЕЙ
const mapDispatchToProps = (dispatch, ownProps) => {

    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer)); //Т.К. ТУТ МЫ ВОЗВРАЩАЕМ BookListContainer, ТО mapDispatchToProps добавляет пропсы именно в BookListContainer