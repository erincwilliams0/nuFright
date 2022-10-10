import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'; 


import { userReducer } from './user/user.reducer';
import { booksReducer } from './books/books.reducer';
import { moviesReducer } from './movies/movies.reducer';

export const store = configureStore({ // <-- this function creates the store 
    reducer: {
        user: userReducer, // <-- this sets the user reducer in the store
        books: booksReducer, // <-- this sets the books reducer in the store
        movies: moviesReducer,
    },
    middleware: (process.env.NODE_ENV === 'development' ? [logger] : []) // <-- this adds the logger middleware only in development mode
});


