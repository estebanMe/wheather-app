import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecasItem from './ForecastItem';
import './styles.css';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                <ForecasItem></ForecasItem>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;