import React, { Component } from "react";
import "./AssessmentPage.css";
import { AssessmentPage1, AssessmentPage2, AssessmentPage3, AssessmentPage4, AssessmentPage5, AssessmentPage6 } from "./AssessmentPages.jsx";
import AssessmentResults from "./AssessmentResults.jsx";

class AssessmentPage extends Component {
  scores = [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]]//where all scores are??
  visited = [true, false, false, false, false, false]

  handleSelectedChange = changeEvent => {
    this.scores = this.state.scores
    this.scores[this.state.counter][parseInt(changeEvent.target.name)] = parseInt(changeEvent.target.value);
    this.setState({
      scores: this.scores
    })
  }

  state = {
    counter: 0,
    scores: this.scores,
    pageHead: <p class="homeHeader">Assessment</p>,
    page: <AssessmentPage1 handleChange={this.handleSelectedChange} score={this.scores[0]} />,
    leftButton: <button class="btn-left-BAD"> Back</button>,
    rightButton: <button class="btn-right" onClick={() => { this.handlePageChange(1) }}> Next </button>,
    prog: <div className="progress">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
  };
  
  handlePageChange = (counter) => {
    if (counter === -1 && this.state.counter === 0) {
      console.log(":)")
      return;
    }

    else if (counter === -1 && this.state.counter === 1) {
      window.scrollTo(0, 0)
      this.setState({
        page: <AssessmentPage1 handleChange={this.handleSelectedChange} score={this.scores[0]} />,
        counter: 0,
        leftButton: <button class="btn-left-BAD"> Back</button>
      })
      this.props.assessChangeC(0)
    }

    if (this.state.counter + counter === 1) {
      window.scrollTo(0, 0)
      if (counter == 1 && !this.visited[1]) {
        this.setState({
          prog: <div className="progress">
          <div className="squareFilled" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
        })
        this.visited[1] = true;
      }
      this.setState({
        page: <AssessmentPage2 handleChange={this.handleSelectedChange} score={this.scores[1]} />,
        counter: this.state.counter + counter,
        leftButton: <button class="btn-left" onClick={() => { this.handlePageChange(-1) }}> Back</button>
      })
      this.props.assessChangeC(1)

    } else if (this.state.counter + counter === 2) {
      window.scrollTo(0, 0)
      if (counter == 1 && !this.visited[2]) {
        this.setState({
          prog: <div className="progress">
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
        })
        this.visited[2] = true;
      }
      this.setState({
        page: <AssessmentPage3 handleChange={this.handleSelectedChange} score={this.scores[2]} />,
        counter: this.state.counter + counter
      })
      this.props.assessChangeC(2)

    } else if (this.state.counter + counter === 3) {
      window.scrollTo(0, 0)
      if (counter == 1 && !this.visited[3]) {
        this.setState({
          prog: <div className="progress">
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
        })
        this.visited[3] = true;
      }
      this.setState({
        page: <AssessmentPage4 handleChange={this.handleSelectedChange} score={this.scores[3]} />,
        counter: this.state.counter + counter
      })
      this.props.assessChangeC(3)

    } else if (this.state.counter + counter === 4) {
      window.scrollTo(0, 0)
      if (counter == 1 && !this.visited[4]) {
        this.setState({
          prog: <div className="progress">
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="square" />
          <div className="square" />
        </div>
        })
        this.visited[4] = true;
      }
      this.setState({
        page: <AssessmentPage5 handleChange={this.handleSelectedChange} score={this.scores[4]} />,
        counter: this.state.counter + counter,
        rightButton: <button class="btn-right" onClick={() => { this.handlePageChange(1) }}> Next </button>
      })
      this.props.assessChangeC(4)

    } else if (this.state.counter + counter === 5) {
      window.scrollTo(0, 0)
      if (counter == 1 && !this.visited[5]) {
        this.setState({
          prog: <div className="progress">
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="squareFilled" />
          <div className="square" />
        </div>
        })
        this.visited[5] = true;
      }
      this.setState({
        page: <AssessmentPage6 handleChange={this.handleSelectedChange} score={this.scores[5]} />,
        counter: this.state.counter + counter,
        rightButton: <button class="btn-right" onClick={() => { this.handlePageChange(1) }}> Submit </button>
      })
      this.props.assessChangeC(5)

    } else if (this.state.counter + counter === 6) {
      window.scrollTo(0, 0)
      this.setState({
        pageHead: <p class="homeHeader">Results</p>,
        page: <AssessmentResults scores={this.scores} />,
        counter: this.state.counter + counter,
        leftButton: <button class="btn-left" onClick={() => {this.reset()}}>Redo</button>,
        rightButton: <button class="btn-right" onClick={() => window.print()}>Save/Print</button>,
        prog: ""
      })
      this.props.assessChangeC(6)
    } else if (this.state.counter + counter === 7) {
      console.log(":(")
      return
    }
  }

  reset = () => {
    this.scores = [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]];
    this.visited = [true, false, false, false, false, false];

    this.setState({
      scores : this.scores,
      pageHead: <p class="homeHeader">Assessment</p>,
      counter: 0,
      page: <AssessmentPage1 handleChange={this.handleSelectedChange} score={this.scores[0]} />,
      leftButton: <button class="btn-left-BAD"> Back</button>,
      rightButton: <button class="btn-right" onClick={() => { this.handlePageChange(1) }}> Next </button>,
      prog: <div className="progress">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
    });
    window.scrollTo(0, 0);
  }

  //Find method to render multiple screens. Figure out counter system (JSX stored in array and referenced in state within div?)
  //main display for resting page 
  render() {
    return (
      <div>
        {this.state.pageHead}
        {this.state.prog}
        <div class="page-container">
          {this.state.page}
        </div>
        <div class="btns">
          <ul class="buttons">
            {this.state.leftButton}
            {this.state.rightButton}
          </ul>
        </div>
      </div>
    );
  }
}

export default AssessmentPage;
