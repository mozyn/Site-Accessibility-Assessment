import React, { Component } from "react";
import Question from "./Question.jsx";

export class AssessmentPage1 extends Component {
  state = {
    
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <p class="intro"> Application Accessibility</p>

          <div class="questionContent">
            <div class="question">
              1. Text, buttons, and other important visual elements are large enough for those hard of seeing
          </div>
            <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

            <div class="question">
              2. There exists an alternative to any audio content for those hard of hearing
          </div>
            <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

            <div class="question">
              3. For important color-coded content, the chosen colors are distinguishable for those with color blindness
          </div>
            <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

            <div class="question">
              4. The chosen text for buttons and other elements is written at or around an 8th grade level
          </div>
            <Question index='3' onChange={this.props.handleChange} score={this.props.score[3]} /><br />

            <div class="question">
              5. Any application or website "gestures" are simple enough for those with motor disabilities
          </div>
            <Question index='4' onChange={this.props.handleChange} score={this.props.score[4]} /><br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export class AssessmentPage2 extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p class="intro">
          Response Time
        </p>
        <div class="questionContent">
          <div class="question">
            1. Significant features and operations have less than a one second variability for response time
          </div>
          <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

          <div class="question">
            2. Frequently used features have a minimal (0.5 sec or less) response time
          </div>
          <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

          <div class="question">
            3. Indicators of lengthy or highly variable response times are present (e.g., loading screens)
          </div>
          <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

          <div class="question">
            4. Users can still work on other tasks during lengthier response times
          </div>
          <Question index="3" onChange={this.props.handleChange} score={this.props.score[3]} /><br />

          <div class="question">
            5. There exists a contingency plan for higher user load or other external forces that can affect response times
          </div>
          <Question index="4" onChange={this.props.handleChange} score={this.props.score[4]} /><br />
        </div>
      </div>
    );
  }
}

export class AssessmentPage3 extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p class="intro">
          Help Facilities
        </p>
        <div class="questionContent">
          <div class="question">
            1. A help document is available within the application or website
          </div>
          <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

          <div class="question">
            2. A help document is only 1 or 2 actions away at any moment
          </div>
          <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

          <div class="question">
            3. Tips for potentially confusing elements or operations are available at the time of those elements or operations
          </div>
          <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

          <div class="question">
            4. Everything a user will need to avoid confusion is available within the application or website
          </div>
          <Question index="3" onChange={this.props.handleChange} score={this.props.score[3]} /><br />

          <div class="question">
            5. The available help documents do not cause further confusion
          </div>
          <Question index="4" onChange={this.props.handleChange} score={this.props.score[4]} /><br />
        </div>
      </div>
    );
  }
}

export class AssessmentPage4 extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p class="intro">
          Error Handling
        </p>
        <div class="questionContent">
          <div class="question">
            1. Error messages are easily understood by users
          </div>
          <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

          <div class="question">
            2. Errors provide advice on how to recover from and prevent an error in the future
          </div>
          <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

          <div class="question">
            3. Warnings indicate error consequences (e.g., data loss, loss of functionality, security)
          </div>
          <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

          <div class="question">
            4. Errors and warnings have audio and/or visual cues to alert users
          </div>
          <Question index="3" onChange={this.props.handleChange} score={this.props.score[3]} /><br />

          <div class="question">
            5. No error messages or warnings place blame on users
          </div>
          <Question index="4" onChange={this.props.handleChange} score={this.props.score[4]} /><br />
        </div>
      </div>
    );
  }
}

export class AssessmentPage5 extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p class="intro">
          Menu and Command Labeling
        </p>
        <div class="questionContent">
          <div class="question">
            1. Command shortcuts are consistent with corresponding menu options
          </div>
          <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

          <div class="question">
            2. Commands are easily memorized or have hints available quickly if forgotten
          </div>
          <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

          <div class="question">
            3. If many command shortcuts exist, users can customize them as they wish
          </div>
          <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

          <div class="question">
            4. Sub-menu labels are consistent with implied functionality of upper-level menu labels
          </div>
          <Question index="3" onChange={this.props.handleChange} score={this.props.score[3]} /><br />

          <div class="question">
            5. Conventions for commands are consistent across the family of applications or websites
          </div>
          <Question index="4" onChange={this.props.handleChange} score={this.props.score[4]} /><br />
        </div>
      </div>
    );
  }
}

export class AssessmentPage6 extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p class="intro">
          Internationalization
        </p>
        <div class="questionContent">
          <div class="question">
            1. The screen layout is appropriate for intended geographical markets
          </div>
          <Question index="0" onChange={this.props.handleChange} score={this.props.score[0]} /><br />

          <div class="question">
            2. The labels and spacing are appropriate for intended geographical markets
          </div>
          <Question index="1" onChange={this.props.handleChange} score={this.props.score[1]} /><br />

          <div class="question">
            3. Any symbols for interactive elements maintain meaning or are adjusted to maintain meaning for intended geographical markets
          </div>
          <Question index="2" onChange={this.props.handleChange} score={this.props.score[2]} /><br />

          <div class="question">
            4. All content within the application or website is legal and culturally sensitive for intended geographical markets
          </div>
          <Question index="3" onChange={this.props.handleChange} score={this.props.score[3]} /><br />

          <div class="question">
            5. Phrases and general text are easily understood or have appropriate translations for intended geographical markets
          </div>
          <Question index="4" onChange={this.props.handleChange} score={this.props.score[4]} /><br />
        </div>
      </div>
    );
  }
}
