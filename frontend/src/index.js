import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "./routes/Route";
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store, persistor} from "./redux/store";
import axios from "axios";

// axios.defaults.baseURL = "https://pleiadeback.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:8080/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
