import React, { Component } from "react";
import "./App.css";

const API = `${process.env.REACT_APP_API_KEY_DS}`
let count = 0;

class App extends Component {
  state = {
    temp: [],
    luftfuktighet: [],
    vindhastighet: [],
    latitude: [],
    longitude: [],
    unit: 'si'
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }, () => {
        debugger;
        this.fetchDarkSkyWeather()
      });
    });
  }
  
  fetchDarkSkyWeather() {
    const { latitude, longitude, unit } = this.state;

    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API}/${latitude},${longitude}?units=${unit}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          temp: data.currently.temperature,
          luftfuktighet: data.currently.humidity,
          vindhastighet: data.currently.windSpeed
        }, () => {
          debugger;
          console.log(this.state);
        });
      });
  };
  
  // changeUnit()
  // setState => unit => new unit
  // trigger new fetchDarkSkyWeather

  render() {
    console.log('::: RENDERED :::', count+=1);
    const { temp, luftfuktighet, vindhastighet, latitude, longitude } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Temperature: {temp}</p>
          <p>Humidity: {luftfuktighet}</p>
          <p>Wind Speed: {vindhastighet}</p>
          <input type="checkbox" name="" id="kdslfkds"/>
        </header>
      </div>
    );
  }
}

export default App;
