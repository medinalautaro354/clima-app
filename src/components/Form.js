import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  cityRef = React.createRef();
  countryRef = React.createRef();

  sendLocation = e => {
    e.preventDefault();
    let location = {
      city: this.cityRef.current.value,
      country: this.countryRef.current.value
    };
    
    this.props.searchClimate(location);

    
  };

  render() {
    return (
      <div className="container-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.sendLocation}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="city" type="text" ref={this.cityRef} />
                <label htmlFor="city">Ciudad:</label>
              </div>

              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.countryRef}>
                  <option value="" defaultValue>
                    Elige un país
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Pais:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 search-engine">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Buscar..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  searchClimate: PropTypes.func.isRequired
}

export default Form;
