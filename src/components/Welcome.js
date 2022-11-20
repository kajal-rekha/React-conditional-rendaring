import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "playground",
    };
  }

  placeChangingHandaler() {
    this.setState({
      place: "home",
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to our {this.state.place}</h1>
        <button onClick={() => this.placeChangingHandaler()}>Go to home</button>
      </div>
    );
  }
}
