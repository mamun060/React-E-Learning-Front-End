import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Assets/css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);


serviceWorker.unregister();
