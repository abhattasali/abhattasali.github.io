import React, { Component } from "react";
import WelcomeBar from "./WelcomeBar";
import IconBar from "./IconBar";
import PageBottom from "./PageBottom";
import ScrollToTopBtn from "./ScrollToTop";
import Timeline from "./Timeline";
import Interest from "./Interest";
import Photos from "./Photos";


export default class App extends Component {
  render() {
    return (
      <div>
        <WelcomeBar />
        <Timeline />
        <Interest />
        <Photos />
        <br/>
        <IconBar /> 
        <PageBottom />
        <ScrollToTopBtn />
      </div>

  );
  }
}