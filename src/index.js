import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import './index.css';
import {Reducer} from './store';
import {createStore,applyMiddleware} from 'redux';




ReactDOM.render(<Provider store={createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))}><App/></Provider>,document.querySelector('#root'));
