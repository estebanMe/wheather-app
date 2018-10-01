import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Washington, US',
  'Ciudad de México, MEX',
  'Madrid, ES',
  'Lima, PE',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (

      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>

    );
  }
}

export default App;
