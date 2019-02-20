import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DAYS_OF_WEEK } from '../constants/daysOfWeek';
import DateTime from '../components/DateTime';

class WeatherDayExplorer extends Component {

  render() {
    const forecasts = this.props.forecastBy3Hours.map(daysForecast => (
      <div>
        <div>
        </div>
        <div>
          <div className="row">
            <div className="col-8">
              <DateTime dateTime={daysForecast.dateTimeStamp} timeOnly={true} />
            </div>
            <div className="col-2">
              <div className="row">
                <div className="col">
                  <img src={daysForecast.weatherIcon} alt="" />
                </div>
                <div className="col">
                  {daysForecast.weather}
                </div>
              </div>
            </div>
            <div className="col-2">
              {daysForecast.temp}<span>&#x2103;</span>
            </div>
          </div>
        </div>
      </div>
    ));
    let dateTime = this.props.forecastBy3Hours[0].dateTimeStamp;
    const dayOfWeek = DAYS_OF_WEEK[(new Date(dateTime).getDay() - 1)];
    return (
      <div>
        <h2>{dayOfWeek}</h2>
        {forecasts}
      </div>
    );
  }
}

WeatherDayExplorer.propTypes = {
  forecastBy3Hours: PropTypes.array.isRequired
};


export default connect(null, {})(WeatherDayExplorer);