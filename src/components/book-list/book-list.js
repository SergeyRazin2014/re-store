import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookStoreService } from '../hoc'; //ПОДКЛЮЧАЕМ НАШ hoc КОМПОНЕНТ КОТОРЫЙ ДОБАВЛЯЕТ В ДРУГОЙ КОМПОНЕНТ СЕРВИС ПОЛУЧЕНИЯ ДАННЫХ С СЕРВЕРА (Т.Е. ДАО)
import { booksLoaded } from '../../actions';


class BookList extends React.Component {

    //МЕТОД ЖИЗНЕННОГО ЦИКЛА
    componentDidMount() {
        //получить данные 
        const { bookstoreService } = this.props; //ПОЛУЧАЮ НАШ СЕРВИС (ДАО КЛАСС) ИЗ ПРОПЕРТЕЙ
        const data = bookstoreService.getBooks(); //ЗАГРУЖАЮ ДАННЫЕ С СЕРВЕРА
        console.log(data);

        //ОТПРАВИТЬ ЗАГРУЖЕННЫЕ ДАННЫЕ В СТОР
        this.props.booksLoaded(data);
    }

    render() {


        

        const { books } = this.props;

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

const mapStateToProps = ({ books }) => {
    return { books }
};

//ПРОСТО ЗАВОРАЧИВАЕМ НАШ АКШН КРЕАТОР В ОБЪЕКТ
// const mapDispatchToProps =  {
//     booksLoaded
// }


export default withBookStoreService()(connect(mapStateToProps, {booksLoaded})(BookList));