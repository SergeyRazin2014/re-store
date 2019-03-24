const initialState = {
    books: [ ]
}

//ФУНКЦИЯ РЕДУСЕР (ОНА ВОЗВРАЩАЕТ НОВОЕ СОСТОЯНИЕ(СТЕЙТ) ПРИ ТОМ ИЛИ ИНОМ СОБЫТИИ
const reducer = (state = initialState, action) => {

    debugger;

    switch (action.type) {
        case 'BOOKS_LOADED': //ЕСЛИ ЭТО СОБЫТИЕ - КНИГИ БЫЛИ ЗАГРУЖЕНЫ
            return {
                books: action.payload  //В СТЕЙТЕ МАССИВ КНИГ ИЗМЕНЯЕТСЯ НА ЗАГРУЖЕННЫЕ КНИГИ
            };

        default: return state; //ЕСЛИ МЫ НЕ МОЖЕМ ОПРЕДЕЛИТЬ КАКОЕ СОБЫТИЕ ПРОИЗОШЛО - ВОЗВРАЩАЕМ ПРОСТО СТЕЙТ КОТОРЫЙ БЫЛ ЗАДАН НА ВХОД

    }
}

export default reducer;