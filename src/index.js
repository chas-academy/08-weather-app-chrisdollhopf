
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MyApp from './App';
// import { DateTime } from 'luxon';
// import Comment from './Comment';
// import Clock from './Clock';

// let request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   // const retrieveWeather = request.response;
//   // populateHeader(retrieveWeather);
//   // showWeather(retrieveWeather);
// }

// function populateHeader(obj) {
//   const myH1 = document.createElement('h1');
//   myH1.textContent = obj['weatherNow'];
//   header.appendChild(myH1);

//    const myPara = document.createElement('p');
//    myPara.textContent = ''
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);