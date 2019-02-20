import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get5DayForecast } from '../actions/weatherActions';

class WeatherQuery extends Component {

    constructor(props) {
        super(props);
        this.onCitySelect = this.onCitySelect.bind(this);
        this.props.get5DayForecast({ lat: 42.698334, lon: 23.319941 });
    }

    onCitySelect(e) {
        let searchCoordinates = e.target.value.split(' ');
        this.props.get5DayForecast({ lat: searchCoordinates[0], lon: searchCoordinates[1] });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <select className="form-control" name="cars" onChange={this.onCitySelect}>
                        <option value="42.698334 23.319941">Sofia</option>
                        <option value="51.509865 -0.118092">London</option>
                        <option value="21, -157">Hawaii</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default connect(null, { get5DayForecast })(WeatherQuery);