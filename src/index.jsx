import React from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
import 'antd/dist/antd.css';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <MainApp />
    </I18nextProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();