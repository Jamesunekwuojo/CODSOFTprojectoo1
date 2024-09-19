import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { AuthContextProvider } from './context/AuthContext.jsx';
import {Provider } from 'react-redux';
import {store} from './state/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <React.StrictMode>
   
   <App /> 

    </React.StrictMode>

  </Provider>

);
