import React from 'react';

const { Provider: BookStoreServiceProvider, Consumer: BookstoreServiceConsumer } = React.createContext();

export {
    BookStoreServiceProvider,
    BookstoreServiceConsumer
};