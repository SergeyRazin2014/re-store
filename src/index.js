//ИМПОРТИРУЕМ РЕАКТ-РЕДАКС МОДУЛИ
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//ИМПОРТИРУЕМ СОЗНАННЫЕ НАМИ МОДУЛИ
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

//СОЗДАЕМ ЗАГРУЖАТЕЛЬ ДАННЫХ С СЕРВЕРА
const bookStoreService = new BookstoreService();

ReactDOM.render(

    <Provider store={store}> 
        <ErrorBoundry> 
            <BookStoreServiceProvider value={bookStoreService}>
                <Router> 
                    <App /> 
                </Router>
            </BookStoreServiceProvider> 
        </ErrorBoundry>
    </Provider>,

    document.getElementById('root')
);

