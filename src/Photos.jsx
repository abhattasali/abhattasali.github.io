import React, { Component } from "react";
import "./CSS/Photos.css";
import myPhotos from "./data/photos";
import ScrollAnimation from "react-animate-on-scroll";

function Photos() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Tiles data={myPhotos} />
    </ScrollAnimation>
  );
}

class Tiles extends Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div className="tiles">
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false,
    };
    // Bind properties to class instance
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true,
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    // When tile clicked
    tileStyle = {
      objectfit: "cover",
      width: "18vw",
      height: "auto",
    };

    return (
      <div className="tile">
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={tileStyle}
        />
      </div>
    );
  }
}

export default Photos;
