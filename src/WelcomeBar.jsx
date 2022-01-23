import React, { Component } from "react";
import Bio from "./Bio";
import WavingHand from "./Images/waving.svg";
//import Logo from "./Images/logo2.png";
import "./CSS/WelcomeBar.css";

class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: true,
      colors: [
        {
          background: "#a9b7c9",
          text: "#2A2C39",
          bold: "#14151c",
        },
      ],
      background: null,
      text: null,
      bold: null,
    };
  }

  componentDidMount() {
    this.Background();
  }

  Background() {
    // Can Be 0 or 1
    this.setState({
      background: this.state.colors[0].background,
      text: this.state.colors[0].text,
      bold: this.state.colors[0].bold,
    });
  }

  render() {
    let sectionStyle = {
      backgroundColor: this.state.background,
      color: this.state.text,
    };
    let boldStyle = {
      color: this.state.bold,
    };

    return (
      <div>
        <section id="welcome" style={sectionStyle}>
          {/*
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="abhattasali"></img>
            </a>
          </div>
          */}
          <div className="section-1">
            <h1 className="middle animated fadeIn" ref="section">
              Hi <img src={WavingHand} alt="waving-hand"></img>, I'm{" "}
              <span className="bold" style={boldStyle}>
                <u className="underlined">Arun</u>
              </span>
              !
            </h1>
            <div className="subtext animated-sub fadeIn">
              I like making things and meeting new people.{" "}
            </div>
            <br />
            <a href="#bio">
              <div className="scroll-down animated-sub fadeIn"></div>
            </a>
          </div>
          <Bio />
        </section>
        <section id="bio"></section>
      </div>
    );
  }
}

export default WelcomeBar;
