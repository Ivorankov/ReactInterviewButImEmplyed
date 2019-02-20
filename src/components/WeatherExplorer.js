import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get5DayForecast } from '../actions/weatherActions';
import WeatherDayExplorer from '../components/WeatherDayExplorer';

class WeatherExplorer extends Component {
  
  render() {
    const forecasts = this.props.forecast.map(daysForecast => (
      <div className="col-sm">
        <WeatherDayExplorer forecastBy3Hours={daysForecast} />
      </div>
    ));

    return (
      <div className="row">
        <div className="col-12 alert-info alert">{forecasts}</div>
      </div>
    );
  }
}

WeatherExplorer.propTypes = {
fetchPosts: PropTypes.func.isRequired,
posts: PropTypes.array.isRequired,
 newPost: PropTypes.object
};

const mapStateToProps = state => ({
  forecast: state.weather.forecast
});

export default connect(mapStateToProps, { get5DayForecast })(WeatherExplorer);