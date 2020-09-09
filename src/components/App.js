import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Cash from "../components/Cash";
import Footer from "../components/Footer";

class App extends React.Component {
  state = {
    value: "",
  };
  currencies = [
    {
      id: 1,
      name: `euro`,
      ratio: 4.47,
      title: "Wartość w euro",
      prefix: "€",
    },
    {
      id: 2,
      name: `dolar`,
      ratio: 3.8,
      title: "Wartość w dolarach",
      prefix: "$",
    },
    {
      id: 3,
      name: `funt`,
      ratio: 4.99,
      title: "Wartość w funtach",
      prefix: "£",
    },
  ];
  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const items = this.currencies.map((item) => (
      <Cash key={item.id} item={item} id={item.id} value={this.state.value} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Simple Exchange counter!
          </a>
          <br />
          <label htmlFor="1">enter a value in pln:</label>
          <br />
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleInput}
            id="1"
          />
          {items}
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
