const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            title: 'book1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            title: 'book2',
            count: 1,
            total: 250
        }
    ],
    orderTotal: 220
}


const reducer = (state = initialState, action) => {

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

        default: return state; 

    }
}

export default reducer;