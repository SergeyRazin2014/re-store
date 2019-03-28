const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}


const reducer = (state = initialState, action) => {


    console.log(action.type); //ПРОСТО МОНИТОРИМ КАКИЕ ДЕЙСТВИЯ ОТПРВЛЯЮТСЯ В РЕДЮСЕР

    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state,  //ЧТОБЫ НЕ ПОТЕРЯТЬ ДРУГИЕ ДАННЫЕ ДОБАВЛЯЕМ СЮДА ЭТО
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload

            }

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id == bookId); //НАХОДИМ КНИГУ В МАССИВЕ


            const newItem = {   //СОЗДАЕМ ОБЪЕКТ КОТОРЫЙ БУДЕТ ОТОБРАЖАТЬСЯ В ТАБЛИЦЕ ПОКУПОК (ВНИЗУ ЭКРАНА)
                id: bookId,
                title: book.title,
                count: 1,
                total: book.price
            }

            //state.cartItems.push(newItem);  // - ТАК ДЕЛАТЬ НЕЛЬЗЯ Т.К. В РЕДАКСЕ ТОЖЕ НЕЛЬЗЯ ИЗМЕНЯТЬ МАССИВ НАПРЯМУЮ

            //НУЖНО ДЕЛАТЬ ТАК (создаем новый массив и не модифицируем старый массив):
            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            }


        default: return state;

    }
}

export default reducer;