import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import alertify from 'alertifyjs';


const store = configureStore()
axios.defaults.baseURL = "http://localhost:8080/api"
alertify.set("notifier", "position", "top-right")

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
