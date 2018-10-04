import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Washington, US',
  'Ciudad de México, MEX',
  'Madrid, ES',
  'Lima, PE',
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Nueva Ciudad',
    }

  }

  handleSelectedLocation = city => {
    this.setState({ city: city });
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"><ForecastExtended city={this.state.city}></ForecastExtended></div>
            </Paper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
