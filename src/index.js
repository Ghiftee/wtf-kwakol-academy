import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/wtf-kwakol-academy'> 
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Note:
// Browser router is used because it is a browser app, if it was mobile, mobile router would be used
// App is wrapped in browser router because it covers the entire app
// However, since we are deploying using gh-pages, to avoid 404 error, we would use hash router
//The issue with hash router is that it gives a hash in the app path e.g localhost:3000/#/contact
//To remove the hash so that it becomes localhost:3000/contact, we use browser router
// According to chatGPT, using basename in the browserrouter component as used above should fix the 404 error
//Using basename though adds the basename to your localhost path so it becomes localhost:3000/wtf-kwakol-academy/contact