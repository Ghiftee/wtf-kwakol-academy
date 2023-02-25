import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> 
     <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Note:
// Browser router is used because it is a browser app, if it was mobile, mobile router would be used
// App is wrapped in browser router because it covers the entire app
// However, since we are deploying using gh-pages, to avoid 404 error, we would use hash router