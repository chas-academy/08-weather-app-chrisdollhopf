
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { DateTime } from 'luxon';
// import Comment from './Comment';
// import Clock from './Clock';

const requestURL = "http://api.openweathermap.org/data/2.5/onecall?lat=59.33258&lon=18.0649&exclude=alerts&appid=ee6433f9c52f03dd4a81fa9c7f8ce2c2"

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  // const retrieveWeather = request.response;
  // populateHeader(retrieveWeather);
  // showWeather(retrieveWeather);
}

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
