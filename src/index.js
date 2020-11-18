import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleWare from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare)),
)

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
