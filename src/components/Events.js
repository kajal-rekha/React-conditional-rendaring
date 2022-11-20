import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: 0,
    };

    //this.makeGoalHnadaler = this.makeGoalHnadaler.bind(this);
  }

  makeGoalHnadaler = () => {
    console.log(this);
    this.setState({
      goals: this.state.goals + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Goals: {this.state.goals}</h1>
        {/* <button onClick={this.makeGoalHnadaler.bind(this)}>
          More goal bind
        </button> */}
        {/* <button onClick={() => this.makeGoalHnadaler()}>
          More goal inline arrow
        </button> */}
        {/* <button onClick={this.makeGoalHnadaler}>
          More goal make arrow in class
        </button> */}
        <button onClick={this.makeGoalHnadaler}>
          More goal make arrow in class
        </button>
      </div>
    );
  }
}
