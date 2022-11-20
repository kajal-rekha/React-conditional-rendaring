import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNumber: 0,
      name: "Arham",
    };
  }

  incrementHandaler() {
    this.setState({
      countNumber: this.state.countNumber + 1,
      name: "Abrar",
    });
  }

  // incrementTenHandaler() {
  //   this.setState({
  //     countNumber: this.state.countNumber + 10,
  //   });
  // }

  incrementTenHandaler() {
    this.setState((prevState) => ({
      countNumber: prevState + 10,
    }));
  }

  decrementHandaler() {
    this.setState({
      countNumber: this.state.countNumber - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>
          Count:{this.state.countNumber} Name: {this.state.name}
        </h1>
        <button onClick={() => this.incrementHandaler()}>Incress</button>

        <button onClick={() => this.incrementTenHandaler()}>
          Increase by 10
        </button>

        <button onClick={() => this.decrementHandaler()}>Decress</button>
      </div>
    );
  }
}
