import React from 'react';
import './Calc.css';
export class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayValue: '',
      equation: [],
      solution: false
    }
  }
  // adds a new digit to the equation string
  addDigit(digit) {
    this.setState((prevState, props) => ({
      displayValue: prevState.displayValue += digit,
      solution: false
    }))
    console.log(this.state.equation);
  }
  toggleNegPos(){
    if (this.state.displayValue > -1) {
      this.setState((prevState, props) => ({
        displayValue: prevState.displayValue * -1,
        solution: false
      }))
    } else {
      this.setState((prevState, props) => ({
        displayValue: Math.abs(prevState.displayValue),
        solution: false
      }))
    }
  }
  addPercent(){
    this.setState((prevState, props) => ({
      displayValue: prevState.displayValue/100,
      solution: false
    }))
  }
  createEquation(char){
    this.setState((prevState, props) => ({
      equation: prevState.equation.concat([prevState.displayValue, char]),
      displayValue: '',
      solution: false
    }))
    console.log(this.state.displayValue);
  }
  displaySolution(){
    this.setState((prevState, props) => ({
      equation: prevState.equation.concat([prevState.displayValue]),
      solution: true
    }))
  }
  clearWindow() {
    this.setState({
      displayValue: '',
      equation: [],
      solution: false
    })
  }
  render(){
    return(
      <div className = 'container'>
      <div className='calcContainer'>
        <div className='calcBody'>
          <div className='clacWindow'>
            <h5 className={this.state.displayValue.length > 24 ? 'digitsExtraSmall' : this.state.displayValue.length < 16 ? 'digits' : 'digitsSmall'}>{this.state.solution === false ? this.state.displayValue : eval(this.state.equation.join(''))}</h5>
          </div>
          <div className='buttonsBox'>
            <div className='buttonColumn'>
                <button className='button' onClick = {this.clearWindow.bind(this)}><h5>AC</h5></button>
                <button className='button' onClick = {() => this.addDigit(7)}><h5>7</h5></button>
                <button className='button' onClick = {() => this.addDigit(4)}><h5>4</h5></button>
                <button className='button' onClick = {() => this.addDigit(1)}><h5>1</h5></button>
                <button className='button' onClick = {() => this.addDigit(0)}><h5>0</h5></button>

            </div>
            <div className='buttonColumn'>
                <button className='button' onClick = {this.toggleNegPos.bind(this)}><h5>+/-</h5></button>
                <button className='button' onClick = {() => this.addDigit(8)}><h5>8</h5></button>
                <button className='button' onClick = {() => this.addDigit(5)}><h5>5</h5></button>
                <button className='button' onClick = {() => this.addDigit(2)}><h5>2</h5></button>
                <button className='button' onClick = {() => this.addDigit('.')}><h5>.</h5></button>
            </div>
            <div className='buttonColumn'>
                <button className='button' onClick = {this.addPercent.bind(this)}><h5>%</h5></button>
                <button className='button' onClick = {() => this.addDigit(9)}><h5>9</h5></button>
                <button className='button' onClick = {() => this.addDigit(6)}><h5>6</h5></button>
                <button className='button' onClick = {() => this.addDigit(3)}><h5>3</h5></button>
                <button className='button' onClick = {this.displaySolution.bind(this)}><h5>=</h5></button>
            </div>
            <div className='buttonColumn'>
                <button className='button' onClick = {() => this.createEquation('/')}><h5>/</h5></button>
                <button className='button' onClick = {() => this.createEquation('*')}><h5>x</h5></button>
                <button className='button' onClick = {() => this.createEquation('-')}><h5>-</h5></button>
                <button className='megaButton' onClick = {() => this.createEquation('+')}><h5>+</h5></button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
