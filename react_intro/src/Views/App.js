import logo from '../logo.svg';
import './App.css';
import React from 'react';

export function App(props) {
  const first = 1;
  const second = 2;

  const secondPara = {
    color: "lightcoral",
    backgroundColor: "black"
  }


  return ( // JSX
    <div className='parentDiv'>
      <p
        style={{
          color: "red",
          backgroundColor: "lightgrey"
        }}
      >
        {/* First Number is {props.appObject.first} */}
        First Number is {first}
      </p>
      <p style={secondPara}>
        {/* Second Number is {props.appObject.second} */}
        Second Number is {second}
      </p>
    </div>
  );
}