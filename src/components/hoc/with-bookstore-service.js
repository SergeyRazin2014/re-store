import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

//функция которая возвращает функцию которая принимает компонент, который мы будем оборачивать
const withBookStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
};

export default withBookStoreService;