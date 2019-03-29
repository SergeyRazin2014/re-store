const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

//ФУНКЦИЯ КОТОРАЯ ОБНОВЛЯЕТ МАССИВ ЗАПИСЕЙ В КАРЗИНЕ ПОКУПОК
const updateCartItems = (cartItems, item, idx) => {

    //УДАЛЯЕМ ЭЛЕМЕНТ ИЗ КАРЗИНЫ ПОКУПОК
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            //item, - НЕ ВСТАВЛЯЕМ ЭЕЛЕМЕНТ, Т.Е. УДАЛЯЕМ ЭЛЕМЕНТ
            ...cartItems.slice(idx + 1)
        ]
    }

    //ЕСЛИ ЭТОГО ЭЛЕМЕНТА НЕТ В КАРЗИНЕ ПОКУПОК ДОБАВЛЯЕМ В КАРЗИНУ ПОКУПОК ЭЛЕМЕНТ
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    //ИНАЧЕ ЕСЛИ ЭТОТ ЭЛЕМЕНТ УЖЕ ЕСТЬ В КАРЗИНЕ ПОКУПОК - ИЗМЕНЯЕМ ЭТОТ ЭЛЕМЕНТ
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

//ФУНКЦИЯ ОБНОВЛЯЕТ ОДНУ ЗАПИСЬ В КАРЗИНЕ ПОКУПОК    (quantity - КОЛИЧЕСТВО КНИГ КОТОРОЕ НУЖНО ДОБАВИТЬ)
const updateCartItem = (book, item = {}, quantity) => {

    //ЕСЛИ item = undefined ТО БУДУТ БРАТЬСЯ ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
    const { id = book.id, count = 0, title = book.title, total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {

    const { books, cartItems } = state;

    const book = books.find((book) => book.id == bookId); //НАХОДИМ КНИГУ В МАССИВЕ (ТИПА В БАЗЕ)

    const itemIndex = cartItems.findIndex((book) => book.id === bookId); //ПРОБУЕМ НАЙТИ КНИГУ В КАРЗИНЕ (Т.Е. id КНИГИ)
    const item = cartItems[itemIndex]; //ТУТ ЕСЛИ НЕ НАШЛИ КНИГУ, ТО БУДЕТ ПРОСТО UNDEFINED ОШИБКИ НЕ БУДЕТ КАК БЫ

    const newItem = updateCartItem(book, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
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
            return updateOrder(state, action.payload, 1)

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.cartItems.find((item) => item.id === action.payload)
            return updateOrder(state, action.payload, -item.count); //ТУТ УМЕНШЬШАЕМ КОЛИЧЕСТВО ДАННЫХ КНИГ ДО 0 В СТРАКЕ - ИТОГДА СТРОКА ДОЛЖНА УДАЛИТЬСЯ САМА


        default: return state;
    }
}

export default reducer;