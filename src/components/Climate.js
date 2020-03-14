import React, { Component } from "react";
import PropTypes from 'prop-types';

class Climate extends Component {
  showResult = () => {
    const { name, weather, main } = this.props.resultClimate;

    if (!name || !weather || !main) {
      return null;
    }

    const kelvin = 273.15;

    const urlIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

    const alt = `Clima de ${name}`;
    return (
      <div className="row">
        <div className="result col s12 m8 l6 offset-m2 offset-l3">
          <div className="card-panel light-blue align-center">
            <span className="white-text">
              <h2> Resultado de la ciudad de {name}</h2>
              <p className="temperature">
                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                <img src={urlIcon} alt={alt} />
              </p>
              <p>Max. {(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
              <p>Min. {(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
            </span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="container">{this.showResult()}</div>;
  }
}

Climate.propTypes = {
  resultClimate: PropTypes.object.isRequired
}
export default Climate;
