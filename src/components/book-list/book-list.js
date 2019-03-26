import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStoreService } from '../hoc'; //ПОДКЛЮЧАЕМ НАШ hoc КОМПОНЕНТ КОТОРЫЙ ДОБАВЛЯЕТ В ДРУГОЙ КОМПОНЕНТ СЕРВИС ПОЛУЧЕНИЯ ДАННЫХ С СЕРВЕРА (Т.Е. ДАО)
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



class BookList extends React.Component {

    //МЕТОД ЖИЗНЕННОГО ЦИКЛА
    componentDidMount() {

        // const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props; //ПОЛУЧАЮ НАШ СЕРВИС (ДАО КЛАСС) ИЗ ПРОПЕРТЕЙ

        // booksRequested();  //ТУТ МЫ В СТОР УСТАНАВЛИВАЕМ loading = true //Т.Е. МЫ КАК БЫ ГОВОРИМ МЫ НАЧИНАЕМ ЗАГРУЗКУ КНИГ С СЕРВЕРА

        // bookstoreService.getBooks() //ЗАГРУЖАЮ ДАННЫЕ С СЕРВЕРА
        //     .then((data) => {
        //         booksLoaded(data); //ОТПРАВИТЬ ЗАГРУЖЕННЫЕ ДАННЫЕ В СТОР
        //     }).catch((err) => {
        //         booksError(err) //ПЕРЕДАЕМ В СТОР ОБЪЕКТ ОШИБКИ
        //     })

        this.props.fetchBooks();

    }

    render() {

        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }


        let bookListItems = books.map((book) => {
            return <li key={book.id} ><BookListItem book={book} /></li>
        })

        return (
            <ul>
                {bookListItems}
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading, error }) => { //БЕРЕТ ДАННЫЕ ИЗ ГЛОБАЛЬНОГО СТЕЙТА И ПЕРЕДАЕТ ИХ ДАННОМУ КОМПОНЕНТУ
    return { books, loading, error }
};

//ОПЯТЬ ДЕЛАЕМ mapDispatchToProps ФУНКЦИЕЙ
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            const { bookstoreService } = ownProps; //ПОЛУЧАЮ НАШ СЕРВИС (ДАО КЛАСС) ИЗ СВОЙСТВ КОМПОНЕНТА

            dispatch(booksRequested());  

            bookstoreService.getBooks() 
                .then((data) => {
                    dispatch(booksLoaded(data)); 
                }).catch((err) => {
                    dispatch(booksError(err)) 
                })
        }
    }
}


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));