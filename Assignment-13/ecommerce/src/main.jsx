import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/store/store.js'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Provider store={store}>
    <App />
 </Provider>

 


  </BrowserRouter>,
)