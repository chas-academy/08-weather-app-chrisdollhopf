import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    temperature: [],
    humidity: [],
    windSpeed: []
  };

  componentDidMount() {
    if (navigator.geolocation) {
    }

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e2d3921448cf0e66aa6e4aed72a26abf/37.8267,-122.4233?units=si"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          temperature: data.currently.temperature,
          humidity: data.currently.humidity,
          windSpeed: data.currently.windspeed
        });
        console.log(this.state);
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <p>temperature: {this.state.temperature}</p>
          <p>humidity: {this.state.humidity}</p>
          <p>windspeed: {this.state.windspeed}</p>
          <p />
        </header>
      </div>
    );
  }
}

export default App;
