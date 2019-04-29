import React, { Component } from 'react';
import './App.css';

const API = `${process.env.REACT_APP_API_KEY_DS}`;
let count = 0;

class App extends Component {
  state = {
    temp: [],
    humidity: [],
    windspeed: [],
    latitude: [],
    longitude: [],
    unit: 'si'
  };

  componentDidMount() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.setState(
    //         {
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude
    //         },
    //         () => {
    //           this.fetchDarkSkyWeather();
    //         }
    //       );
    //     },
    //     (error) => {
    //       alert('Sorry, you need to actually allow us to position you to get weather data for your location!');
    //       // TODO: show default weather for stockholm...
    //     },
    //     {
    //       enableHighAccuracy: false,
    //       maximumAge: 600000,
    //       timeout: 20000
    //     }
    //   );
    // }
  }

  fetchDarkSkyWeather() {
    const { latitude, longitude, unit } = this.state;

    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API}/${latitude},${longitude}?units=${unit}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            temp: data.currently.temperature,
            humidity: data.currently.humidity,
            windspeed: data.currently.windSpeed
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  // changeUnit()
  // setState => unit => new unit
  // trigger new fetchDarkSkyWeather

  render() {
    console.log('::: RENDERED :::', (count += 1), "Photo by Noah Silliman on Unsplash");
    const { temp, humidity, windspeed, latitude, longitude } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>Weather App</h1>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Temperature: {temp}</p>
          <p>Humidity: {humidity}</p>
          <p>Wind Speed: {windspeed}</p> */}
          <h1>Weather App</h1>
          <p>Latitude: 59.294989900000004</p>
          <p>Longitude: 18.011105699999998</p>
          <p>Temperature: 15.87</p>
          <p>Humidity: 0.56</p>
          <p>Wind Speed: 3.11</p>

          <input type="checkbox" name="" id="kdslfkds" />
        </header>

        <section className="App-hourly">
          <ul>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
            <li className="card">
              <article>
                <header>
                  <h3>3 P.M</h3>
                </header>
                <h2>22℃</h2>
                <footer>Feels like 18℃</footer>
              </article>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
