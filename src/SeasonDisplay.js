import React, { Component } from "react";
import PropTypes from "prop-types";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
    // Only time we do direct assignment
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("My component just rerendered");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latitude: {this.state.lat}
          <br />
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}

export default SeasonDisplay;
