const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',  //МОЖНО ЭТИ СТРОКОВЫЕ КОНСТАНТЫ ВЫНОСИТЬ В ОТДЕЛЬНЫЙ ФАЙЛ
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'  
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }

}


//ТУТ ОБОРАЧИВАЕМ ВСЕ В ФУНКЦИЮ КОТОРАЯ ВЫЗЫВАЕТ ФУНКЦИЮ ЧТОБЫ НАШ КОМПОНЕНТ НЕ ЗАВИСЕЛ ОТ ПАРАМЕТРОВ bookstoreService, dispatch, НАШ КОМПОНЕНТ ДОЛЖЕН ПРОСТО ВЫЗЫВАТЬ ФУНКЦИЮ БЕЗ ПАРАМЕТРОВ
//ФУНКЦИЯ С ПАРАМЕТРАМИ ВЫЗЫВАЕТСЯ ВНЕ КОМПОНЕНТА Т.Е. В mapDispatchToProps , ТЕМ САМЫМ ДОБАВЛЯЯ В ПРОПС КОМПОНЕНТА ВЛОЖЕННУЮ ФУНКЦИЮ .
const fetchBooks = (bookstoreService, dispatch) => () => {

    dispatch(booksRequested());

    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data));
        }).catch((err) => {
            dispatch(booksError(err))
        })
}



//Т.К. АКШН КРЕАТОРЫ: booksLoaded, booksRequested, booksError ИСПОЛЬЗУЮТСЯ ТОЛЬКО С fetchBooks, ТО ИХ ЭКСПОРТИРОВАТЬ ТЕПЕРЬ НЕ НУЖНО ЭКСПОРТИРУЕМ ПРОСТО fetchBooks
// export {
//     booksLoaded,
//     booksRequested,
//     booksError,
// };

export { fetchBooks };