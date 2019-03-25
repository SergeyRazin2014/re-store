const initialState = {
    books: [],
    loading: true,

}

//ФУНКЦИЯ РЕДУСЕР (ОНА ВОЗВРАЩАЕТ НОВОЕ СОСТОЯНИЕ(СТЕЙТ) ПРИ ТОМ ИЛИ ИНОМ СОБЫТИИ
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [], //ТУТ МОЖЕМ С ЧИСТОЙ СОВЕСТЬЮ ПОСТАВИТЬ ПУСТОЙ МАССИВ Т.К. ПОСЛЕ ЭТОГО АКШН МЕТОДА ВСЕГДУ БУДЕТ ВЫЗЫВАТЬСЯ ЗАГРУЗКА КНИГ С СЕРВЕРА И КНИГИ ПЕРЕЗАПИШУТСЯ
                loading: true
            }
        case 'BOOKS_LOADED': //ЕСЛИ ЭТО СОБЫТИЕ - КНИГИ БЫЛИ ЗАГРУЖЕНЫ
            return {
                books: action.payload,  //В СТЕЙТЕ МАССИВ КНИГ ИЗМЕНЯЕТСЯ НА ЗАГРУЖЕННЫЕ КНИГИ
                loading: false
            };

        default: return state; //ЕСЛИ МЫ НЕ МОЖЕМ ОПРЕДЕЛИТЬ КАКОЕ СОБЫТИЕ ПРОИЗОШЛО - ВОЗВРАЩАЕМ ПРОСТО СТЕЙТ КОТОРЫЙ БЫЛ ЗАДАН НА ВХОД

    }
}

export default reducer;