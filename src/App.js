import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import WeatherExplorer from './components/WeatherExplorer';
import WeatherQuery from './components/WeatherQuery';

import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userCoordinates: { lat: null, lon: null } };
  }

  render() {
    navigator.geolocation.getCurrentPosition((position) => {
      let coordinates = {
        lat: position.coords.latitude.toFixed(2),
        lon: position.coords.longitude.toFixed(2)
      };
      this.setState({ userCoordinates: coordinates })
    });
    return (
      <Provider store={store}>
        <div className="App container-fluid">
          <h3>Your Location is: {this.state.userCoordinates.lat} - {this.state.userCoordinates.lon}</h3>
          <h1 className="col-12">Select City</h1>
          <WeatherQuery />
          <hr />
          <WeatherExplorer />
        </div>
      </Provider>
    );
  }
}

export default App;