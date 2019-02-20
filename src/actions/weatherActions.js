import { GET_FORECAST } from '../constants/types';
import { WEATHER_API_KEY } from '../constants/weatherApiKey';

export const get5DayForecast = (coordinates) => dispatch => {
  let searchQuery = '?lat=' + coordinates.lat + '&lon=' + coordinates.lon;
  searchQuery = searchQuery + '&APPID=' + WEATHER_API_KEY;
  fetch('http://api.openweathermap.org/data/2.5/forecast' + searchQuery)
    .then(res => res.json())
    .then((forecast) => {
      let forecastListByDay = [];
      let forecastList = forecast.list;
      let currentDay = [];
      for (var i = 0; i < forecastList.length; i += 1) {
        let currentForecast = forecastList[i];
        currentDay.push({
          weather: currentForecast.weather[0].main,
          weatherIcon: 'http://openweathermap.org/img/w/' + currentForecast.weather[0].icon + '.png',
          dateTimeStamp: currentForecast.dt_txt,
          temp: Math.abs((currentForecast.main.temp - 273.15)).toFixed(1)
        });

        if ((i + 1) % 8 === 0) {
          let firstItems = currentDay.splice(0, 3);
          for (var j = 0; j < firstItems.length; j += 1) {
            currentDay.push(firstItems[j]);
          }

          forecastListByDay.push(currentDay);
          currentDay = [];
        }

      }

      dispatch({
        type: GET_FORECAST,
        data: forecastListByDay
      });
    }
    );
};