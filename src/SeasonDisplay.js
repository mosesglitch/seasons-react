import React, { Component } from "react";
import PropTypes from "prop-types";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}

export default SeasonDisplay;
