import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Demo} from './Demo';
import { Conditional } from './Conditional';
import {EventEg} from './EventEg'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Demo />
//   </React.StrictMode>
// );

// root.render(
//   <React.StrictMode>
//     <App 
//       firstNumber = {50}
//       secondNumber = {70}
//     />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Conditional 
      newNumber = {50}
      firstNumber = {50}
      secondNumber = {70}
    />
  </React.StrictMode>
);

// root.render(
//   <EventEg />
// )

// for jsx
//const myElement = (<p>This is JSX</p>);

// root.render(
//   //<h1>Hello World</h1>
//   myElement
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
