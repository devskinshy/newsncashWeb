// font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {Provider as ReduxProvider} from "react-redux";
import store from "./redux/store";

import {BrowserRouter} from "react-router-dom";

import App from './App';
import RNListener from './components/RNListener';

//React.StrictMode

ReactDOM.render(
  <>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <RNListener>
          <App />
        </RNListener>
      </BrowserRouter>
    </ReduxProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
