import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';
import { getProducts } from './redux/productActions'
import { checkLoginStatus } from './redux/login/loginActions'

store.dispatch(getProducts())
store.dispatch(checkLoginStatus())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
