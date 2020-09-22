import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'Vine',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'The mountains',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Rebels',
      category: 'Action',
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
