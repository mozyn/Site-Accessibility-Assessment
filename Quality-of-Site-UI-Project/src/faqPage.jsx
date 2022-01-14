import React, { Component } from "react";

class FAQPage extends Component {
  state = {
    pika: "",
    audio: new Audio("PokemonMusic.mp3"),
   
    toggleOn: false,
    isPlaying: false
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      //pause 
      this.state.audio.pause();
    }
    else {
      //play
      this.state.audio.play();
      this.state.audio.volume = 0.1;
    }
    // Change the state of song
    this.setState({ isPlaying: !this.state.isPlaying });
  }
  
  showHide = () => {
    if (this.state.toggleOn == false) {
      this.setState({
        pika: <center><img className="pika" src={"pikachu.gif"} alt="pikachu winking" /></center>,
        toggleOn: true
      });
    }
    else {
      this.setState({
        pika: "",
        toggleOn: false
      })
    }
  }

  render() {
    return (
      <div>
        <p class="homeHeader">
          Frequently Asked Questions
        </p>
        <div class="bodyContent">
          <p>
            Q: What does this assessment do?<br />
            A: This assessment will help determine the level of accessibility of the software or application you're developing.
        </p>
          <p>
            Q: How does the assessment work?<br />
            A: The results of the assessment are based on your honest responses which are calculated to give a score for each category along with an overall score.
        </p>
          <p>
            Q: What if I don't understand a question or something else on a page?<br />
            A: The questionmark icon on the lower-right corner of the page, when clicked, will provide appropriate information for the current page you're on. Sometimes links to external pages for help will be provided.
        </p>
          <p>
            Q: Will answering N/A affect the score?<br />
            A: No. An N/A response is there for when a question truly is not relevant or applicable to your application or software. Selecting this will not impact your category score or overall score.
        </p>
          <p>
            Q: Why was this assessment made?<br />
            A: This assessment was created as a project for our CIS 375 - Software Engineering course at the University of Michigan-Dearborn. Please refer to the 'HELP & MORE' page for additional information on the project, authors, and references.
        </p>
          <p>
            Q: Wanna see something fun?<br />
            <button onClick={() => { this.showHide(); this.playPause() }}>;)</button><br />
            {this.state.pika}
          </p>
        </div>
      </div>
    );
  }
}

export default FAQPage;
