import React, { Component } from "react";
import StoreChild from "./StoreChild";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFruits: 25,
      fruitName: "",
    };
  }

  handleGrapFruit = (fruitName) => {
    this.setState({
      totalFruits: this.state.totalFruits - 1,
      fruitName: fruitName,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Total fruits: {this.state.totalFruits} - {this.state.fruitName}
        </h1>
        <StoreChild handleGrapFruit={this.handleGrapFruit} />
      </div>
    );
  }
}
