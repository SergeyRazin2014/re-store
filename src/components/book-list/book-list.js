import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStoreService } from '../hoc'; //ПОДКЛЮЧАЕМ НАШ hoc КОМПОНЕНТ КОТОРЫЙ ДОБАВЛЯЕТ В ДРУГОЙ КОМПОНЕНТ СЕРВИС ПОЛУЧЕНИЯ ДАННЫХ С СЕРВЕРА (Т.Е. ДАО)
import { booksLoaded, booksRequested } from '../../actions';
import Spinner from '../spinner';


class BookList extends React.Component {

    //МЕТОД ЖИЗНЕННОГО ЦИКЛА
    componentDidMount() {

        debugger;

        const { bookstoreService, booksLoaded, booksRequested } = this.props; //ПОЛУЧАЮ НАШ СЕРВИС (ДАО КЛАСС) ИЗ ПРОПЕРТЕЙ

        booksRequested();  //ТУТ МЫ В СТОР УСТАНАВЛИВАЕМ loading = true //Т.Е. МЫ КАК БЫ ГОВОРИМ МЫ НАЧИНАЕМ ЗАГРУЗКУ КНИГ С СЕРВЕРА

        bookstoreService.getBooks() //ЗАГРУЖАЮ ДАННЫЕ С СЕРВЕРА
            .then((data) => {
                booksLoaded(data); //ОТПРАВИТЬ ЗАГРУЖЕННЫЕ ДАННЫЕ В СТОР
            })
    }

    render() {

        const { books, loading } = this.props;

        if (loading) {
            return <Spinner />
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

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}


export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));