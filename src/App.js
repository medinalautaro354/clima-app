import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from './components/Error';
import {apiKey, baseUrl}from './configuration/config';
import Climate from './components/Climate';

class App extends React.Component {
  state = {
    error: false,
    location: {},
    resultClimate: {}
  };

  getClimate = ()=>{
    const {city, country} = this.state.location;
    let url = `${baseUrl}data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    if(!city || !country){
      return null;
    }

    fetch(url)
    .then(response =>{
      return response.json();
    })
    .then(body =>{
      if(body.cod === 200){
        this.setState({
          resultClimate: body
        })
      }else{
        console.log(body.message);
      }
        
    })
    .catch(error =>{
      console.log(error);
    })


  }

  componentDidUpdate(){
    this.getClimate();
  }

  searchClimate = location => {
    const { city, country } = location;

    if (city === "" || country === "") {
      this.setState({
        error:true
      });
    } else {
      this.setState({
        error:false,
        location: {
          city,
          country
        }

      })
      

      
    }
  };
  render() {

    const error = this.state.error;

    let result;

    if(error){
      result = <Error menssage='Ambos campos son obligatorios.'/>
    }else{
      result = <Climate resultClimate = {this.state.resultClimate}/>
    }

    return (
      <div className="App">
        <Header tittle="Clima app" />

        <Form searchClimate={this.searchClimate} />

        {result}
      </div>
    );
  }
}

export default App;
