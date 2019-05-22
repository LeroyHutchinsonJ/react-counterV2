import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Creating a class
class CountingParent extends React.Component {
  //Giving the class some states
  state = {
    actionCount: 1
  };

  handleAction = () => {
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  };

  resetAction = () => {
    this.setState({
      actionCount: 0
    });
  };

  minusAction = () => {
    this.setState({
      actionCount: this.state.actionCount - 1
    });
  };
  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
        <button onClick={this.resetAction}>Reset Button</button>
        <button onClick={this.minusAction}>Minus Button</button>
      </div>
    );
  }
}

function Child({ onAction }) {
  return <button onClick={onAction}>Click me </button>;
}

var App = () => {
  return (
    <div className="App">
      <CountingParent />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
