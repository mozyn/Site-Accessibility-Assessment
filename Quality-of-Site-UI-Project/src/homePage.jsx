import React, { Component } from "react";

class HomePage extends Component {
  state = {
  };

  render() {

    return (
      <React.Fragment>
        <p class="homeHeader">
          Web UI Accessibility Analysis
        </p>

        <div class="logo">
          <img src={"256_logo.png"} alt="Team 7 Logo" />
        </div>
        
        <p class="intro">
        <br />
          Each of the following accessibility categories will be assessed for your website or application:
        </p>

        <ul class="Container">
          <li class="firstList">Application Accessibility</li>
          <li class="firstList">Response Time</li>
          <li class="firstList">Help Facilities</li>
          <li class="firstList">Error Handling</li>
          <li class="firstList">Menu and Command Labeling</li>
          <li class="firstList">Internationalization</li>
        </ul>
        <div class="bottom-btn">
          <button class="startButton" onClick={() => { this.props.handleChangeC(3) }}>Begin Assessment</button>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
