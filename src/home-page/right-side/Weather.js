import React from "react";
import Moment from "moment";
import "./Weather.css";
import Cloudy from "../../images/cloudy.svg";
import Clear from '../../images/day.svg'
import Rainy from "../../images/rainy-6.svg";
import {fetchWeather} from '../../httpRequests';

class Weather extends React.Component {
  state = {
    weather: {}
  };

  componentDidMount() {
    fetchWeather()
      .then(weatherInfo => {
        this.setState({
          weather: {
            main: weatherInfo.weather[0].main,
            temp: weatherInfo.main.temp
          }
        });
      })
      .catch(console.error);
  }

  render() {
    const { weather } = this.state
    return (
      <div>
        <div className="is-gropued">
          <div className="control date">
            <span className="subtitle is-4">
              {Moment().format("dddd Do MMMM YYYY")}
            </span>
            <div className="weather control is-pulled-right">
              <span>
                {weather.main && (
                  <img src={this.showWeatherIcon(weather.main)} alt="weather" />
                )}
              </span>
              <span className="subtitle is-4">
                {weather.temp && weather.temp}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showWeatherIcon = weather => {
    if(weather === 'Drizzle') weather = 'Rain';
    if (weather === "Rain") return Rainy;
    else if (weather === "Clouds") return Cloudy;
    else if (weather === "Clear") return Clear;
  };
}

export default Weather;
