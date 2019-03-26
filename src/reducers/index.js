const initialState = {
    books: [],
    loading: true,
    error: null
}

//ФУНКЦИЯ РЕДУСЕР (ОНА ВОЗВРАЩАЕТ НОВОЕ СОСТОЯНИЕ(СТЕЙТ) ПРИ ТОМ ИЛИ ИНОМ СОБЫТИИ
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [], //ТУТ МОЖЕМ С ЧИСТОЙ СОВЕСТЬЮ ПОСТАВИТЬ ПУСТОЙ МАССИВ Т.К. ПОСЛЕ ЭТОГО АКШН МЕТОДА ВСЕГДУ БУДЕТ ВЫЗЫВАТЬСЯ ЗАГРУЗКА КНИГ С СЕРВЕРА И КНИГИ ПЕРЕЗАПИШУТСЯ
                loading: true,
                error: null
            }
        case 'BOOKS_LOADED': //ЕСЛИ ЭТО СОБЫТИЕ - КНИГИ БЫЛИ ЗАГРУЖЕНЫ УСПЕШНО
            return {
                books: action.payload,  //В СТЕЙТЕ МАССИВ КНИГ ИЗМЕНЯЕТСЯ НА ЗАГРУЖЕННЫЕ КНИГИ
                loading: false,
                error: null,
            };

        case 'BOOK_ERROR':
            return {
                books: [], //ЕСЛИ ВОЗНИКЛА ОШИБКА ПРИ ЗАГРУЗКЕ КНИГ ТО КНИГИ НАМ ПОНЯТНОЕ ДЕЛО УЖЕ НЕ НУЖНО ПОКАЗЫВАТЬ
                loading: false, //ГОВОРИМ ЧТО ЗАГРУЗКА ЗАВЕРШЕНА
                error: action.payload //ПЕРЕДАЕМ ЧЕРЕЗ ЭКШЕН ЗНАЧЕНИЕ ТОЙ ОШИБКИ КОТОРАЯ У НАС ПРОИЗОШЛА

            }

        default: return state; //ЕСЛИ МЫ НЕ МОЖЕМ ОПРЕДЕЛИТЬ КАКОЕ СОБЫТИЕ ПРОИЗОШЛО - ВОЗВРАЩАЕМ ПРОСТО СТЕЙТ КОТОРЫЙ БЫЛ ЗАДАН НА ВХОД

    }
}

export default reducer;