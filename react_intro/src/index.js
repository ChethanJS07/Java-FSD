import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MyRoutes } from './Layout';
// import Condition from './Condition'
// import { App } from './App'
// import { MyForm } from './MyForm'

const root = ReactDOM.createRoot(document.getElementById('newRoot'));
root.render(
  <MyRoutes />
);
// root.render(
//   <Condition />
// );
// root.render(
//   <App />
// );
// root.render(
//   <MyForm />
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
