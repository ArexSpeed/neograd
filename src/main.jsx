import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { store } from './context/store';
import { Provider } from 'react-redux';
import './styles/Styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
