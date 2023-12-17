// import React, { Component } from 'react';
// import './App.css';
// class App extends Component {

//   state = {
//     timezone: [],
//     sunrise: [],
//     sunset: [],
//     temp: '...loading',
//     humidity: [],
//     windbearing: [],
//     windspeed: [],
//     latitude: [],
//     longitude: [],
//     unit: 'si'
//   };

//   /*
//    fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
//    shorthand variation (one line)
//   */

//   fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
//   }
  
//   componentDidMount() {
//     fetch("/weather")
//     .then(res => res.json())
//     .then(
//       (data) => {
//         console.log(data)
//         this.setState({
//           timezone: data.timezone,
//           // sunrise: DateTime.fromSeconds(data.daily.data[0].sunriseTime).toFormat('hh mm'), // not working!!!
//           sunrise: new Date(data.daily.data[0].sunriseTime * 1000).toLocaleTimeString("en-US", { timeZone: data.timezone, hour12: true }),
//           sunset: new Date(data.daily.data[0].sunsetTime * 1000).toLocaleTimeString("en-US", { timeZone: data.timezone, hour12: true }),
//           temp: Math.round(this.fahrenheitToCelsius(data.currently.temperature)),
//           humidity: data.currently.humidity,
//           windbearing: data.currently.windBearing,
//           windspeed: data.currently.windSpeed,
//         })
//       }
//     )
//   }

//   render() {

//     // const { temp } = this.state;
//     // const DateTime = luxon.DateTime;
    
//     return (
//       <div>
//         <h1>Weather Result</h1>
//           <p>Timezone: {this.state.timezone}</p>
//           <p>Sunrise: {this.state.sunrise}</p>
//           <p>Sunset: {this.state.sunset}</p>
//           <p>Current temp is: {this.state.temp}</p>
//           <p>Humidity is: {this.state.humidity}</p>
//           <p>Winds direction: {this.state.windbearing}</p>
//           <p>Wind speed: {this.state.windspeed}</p>
//       </div>
//     )
//   }
// };

// export default App;

// search location via an form input
// form input sets location for api call
// map over api call results
// display results for 

import React, { useState, useEffect } from 'react';

export default function App() {
  
  // store the data to be retrieved from the api:
  // also default value set to empty array:
  const [posts, setPosts] = useState([]);
  const myRequest = `http://api.openweathermap.org/data/2.5/onecall?lat=59.33258&lon=18.0649&exclude=alerts&appid=${process.env.REACT_APP_API_KEY_OWM}`;
  


  useEffect(() => {
    fetch(myRequest)
    .then((response) => response.json())
    .then((data ) => {
        setPosts(data.current);
      }
    )
    .catch((err) => {
        console.log(err.message);
    })
  }, [])

  return (
    // consume the stored api data here:
    <div className="weather-information">
      <h1>{posts.current}</h1>
    </div>
  )
}