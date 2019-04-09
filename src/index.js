import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  };

  handleAction = action => {
    console.log("child says", action.type);

    this.setState({
      actionCount: this.state.actionCount + 1
    });
  };

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction }) {
  return <button onClick={onAction}>Click Me</button>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<CountingParent />, rootElement);
