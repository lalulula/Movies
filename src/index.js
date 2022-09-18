import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // devtools console로그되는거 방지하기위해 일단 해둔거임
);

// reportWebVitals();

//Index.js for rendering <App> Component
