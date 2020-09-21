import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
