import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="number" id="num1" />
        <input type="number" id="num2" />
        <br />
        <button onClick={this.props.CalculateValue.bind(this, "ADD")} >ADD</button>
        <button onClick={this.props.CalculateValue.bind(this, "SUBTRACT")}>SUBTRACT</button>
        <button onClick={this.props.CalculateValue.bind(this, "MULTIPLY")}>MULTIPLY</button>
        <button onClick={this.props.CalculateValue.bind(this, "DIVISION")}>DIVISION</button>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CalculateValue: (name) => dispatch(
      { type: name, num1: document.getElementById("num1").value, num2: document.getElementById("num2").value }
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
