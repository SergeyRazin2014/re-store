const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',  //МОЖНО ЭТИ СТРОКОВЫЕ КОНСТАНТЫ ВЫНОСИТЬ В ОТДЕЛЬНЫЙ ФАЙЛ
        payload: newBooks
    }
}

export {
    booksLoaded
};