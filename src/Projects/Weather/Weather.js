import React from 'react';
import './Weather.css';

export class Weather extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      temp: null,
      hum: null,
      wind: null,
      pressure: null,
      clouds: null,
      percip: null,
      unit: 'F',
      opposite: 'C',
      city: 'Barcelona',
      place: 'Barcelona, Sp'
    }
  }
  // a function which makes the api request and returns the apropriate data to this.state.
  getWeather(location) {
    const init = {
      method: 'GET'
    };

    let query = this.state.city;

    if (location !== undefined) {
      query = location
    }



    let URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${query}&APPID=3fa5a40b33326ebb41dd011e157015d0`;
    fetch(URL, init).then((response) => {return response.json()}).then((response) => {this.setState({
      temp: response.main.temp,
      hum: response.main.humidity,
      wind: response.wind.speed,
      pressure: response.main.pressure,
      clouds: response.clouds.all,
      place: response.name + ',' + response.sys.country

      });console.log(response);});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getWeather(event.target.searchBar.value); // The value from input is passed into this function as event. This is then passed into getWeather when the from is submited.
    this.setState({city:event.target.searchBar.value});
  }

    toggleUnit() {

    const toCelcius = Math.floor((((this.state.temp -32) * 5) / 9));
    const toFar = (((this.state.temp * 9) /5) +32);

    if (this.state.unit === 'F') {
      this.setState({
        unit: 'C',
        opposite: 'F',
        temp: toCelcius
      });
    } else if(this.state.unit === 'C') {
      this.setState({
        unit: 'F',
        opposite: 'C',
        temp: toFar
      });
    }
  }

  componentWillMount() {
    this.getWeather();
  }

  render(){
    return(
      <section>
          <div className='searchBox'>
              <form className="searchBox" onSubmit={this.handleSubmit.bind(this)}>
                  <input className="searchBox"
                    type="text"
                    name="searchBar"
                    placeholder="Search a city..."
                  />
              </form>
          </div>
          <div className='weatherContainer'>
          <div className='city'>{this.state.place}</div>
              <div>
                  <div className="tempBox col-sm-4 col-sm-offset-4">
                      <h1>{Math.floor(this.state.temp)}°</h1>
                  </div>
              </div>
                <div className='conditions'>
                  <div className="col-xs-2 col-xs-offset-4 conditionBoxes ">
                      <h4 className=""> <h5>Humidity:</h5> {this.state.hum}% </h4>
                  </div>
                  <div className=" col-xs-2 conditionBoxes ">
                      <h4 className=""><h5>Wind:</h5>{this.state.wind }m/s</h4>
                  </div>
                  <div className="col-xs-2 conditionBoxes">
                      <h4 className=""><h5>Cloud Cover:</h5>{this.state.clouds} %</h4>
                  </div>
                </div>
              <button className='unitsToggle' onClick={this.toggleUnit.bind(this)}>{this.state.opposite + '°'}</button>
          </div>
      </section>
    );
  }
}
