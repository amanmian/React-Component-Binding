import {combineReducers} from 'redux';
import {BooksReducer} from './reducer-books';
import React from 'react';

const rootReducer = combineReducers({
    book : BooksReducer
});

export default rootReducer;