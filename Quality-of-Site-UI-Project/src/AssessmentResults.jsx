import React, { Component } from "react";
import { Rec1, Rec2, Rec3, Rec4, Rec5, Rec6 } from "./AssessmentResultsRecs.jsx";

class AssessmentResults extends Component {
  catScores = [-1, -1, -1, -1, -1];
  totalScore = 0;
  ran = false;

  state = {
    score: "N/A",
    header: "ERROR: every question was answered N/A",
    body: <center>Please redo the assessment and try again.</center>,
    rec1: "",
    rec2: "",
    rec3: "",
    rec4: "",
    rec5: "",
    rec6: ""
  };

  calcScores = (allScores) => {
    if (this.ran == false) {
      var allNA = true;
      var allN = 0;
      for (var i = 0; i < 6; i++) {
        var allCatNA = true;
        var catTotal = 0;
        var n = 0;
        for (var j = 0; j < 5; j++) {
          if (allScores[i][j] != -1) {
            allCatNA = false;
            n++;
            allN++;
            catTotal += allScores[i][j];
            this.totalScore += allScores[i][j];
          }
        }
        if (allCatNA == false && n != 0) {
          allNA = false;
          this.catScores[i] = catTotal / n;
        }
      }

      if (allNA == false && allN != 0) {
        this.totalScore = this.totalScore / allN * 25;
        if (this.totalScore % 1 != 0) {
          this.totalScore = this.totalScore.toFixed(1)
        }
      }
      else {
        this.totalScore = -1;
      }

      if (this.totalScore >= 0 && this.totalScore < 30) {
        this.setState({
          score: this.totalScore + "/100",
          header: "Your website/application isn't very accessible",
          body: "Based on your answers, your website or application follows few to no accessibility guidelines. This means your website or application needs much higher focus on accessibility features and standards."
        })
      } else if (this.totalScore >= 30 && this.totalScore < 60) {
        this.setState({
          score: this.totalScore + "/100",
          header: "Your website/application is somewhat accessible",
          body: "Based on your answers, your website or application follows some accessibility guidelines. This means your website or application should focus some more on accessibility features and standards for future iterations and updates."
        })
      } else if (this.totalScore >= 60 && this.totalScore < 80) {
        this.setState({
          score: this.totalScore + "/100",
          header: "Your website/application is moderately accessible",
          body: "Based on your answers, your website or application follows quite a few accessibility guidelines. This is a good thing, and means there is less to work on in getting your website or application more accessible."
        })
      } else if (this.totalScore >= 80 && this.totalScore <= 100) {
        this.setState({
          score: this.totalScore + "/100",
          header: "Your website/application is very accessible",
          body: "Based on your answers, your website or application follows most or all accessibility guidelines. This is great, and means your website or application is highly accessible. Great job!"
        })
      }

      if (this.catScores[0] >= 0 && this.catScores[0] < 2) {
        this.setState({
          rec1: <Rec1 />
        })
      }
      if (this.catScores[1] >= 0 && this.catScores[1] < 2) {
        this.setState({
          rec2: <Rec2 />
        })
      }
      if (this.catScores[2] >= 0 && this.catScores[2] < 2) {
        this.setState({
          rec3: <Rec3 />
        })
      }
      if (this.catScores[3] >= 0 && this.catScores[3] < 2) {
        this.setState({
          rec4: <Rec4 />
        })
      }
      if (this.catScores[4] >= 0 && this.catScores[4] < 2) {
        this.setState({
          rec5: <Rec5 />
        })
      }
      if (this.catScores[5] >= 0 && this.catScores[5] < 2) {
        this.setState({
          rec6: <Rec6 />
        })
      }
      this.ran = true;
    }
  }

  render() {
    { this.calcScores(this.props.scores) }
    return (
      <div>
        <p class="resScore">
          {this.state.score}
        </p>
        <p class="resIntro">
          {this.state.header}
        </p>
        <p class="resBodyContent">
          {this.state.body}
        </p>
        <div> {this.state.rec1} </div>
        <div> {this.state.rec2} </div>
        <div> {this.state.rec3} </div>
        <div> {this.state.rec4} </div>
        <div> {this.state.rec5} </div>
        <div> {this.state.rec6} </div>
      </div>
    );
  }
}

export default AssessmentResults;
