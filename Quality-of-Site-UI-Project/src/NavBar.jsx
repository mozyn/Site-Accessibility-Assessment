import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import HomePage from "./homePage.jsx"
import FAQPage from "./faqPage.jsx"
import HelpMorePage from "./helpMorePage.jsx"
import AssessmentPage from "./AssessmentPage.jsx"
import './NavBar.css';
import Popup from "./Popup.jsx";

class NavigationBar extends Component {
  assessChange = (assessPage) => {
    if (assessPage == 0) {
      this.setState({
        help: <div><h3>Application Accessibility</h3>
          <p>1. Studies from the MIT Touch Lab have suggested that 10mm by 10mm is an optimally minimum size for buttons.
          <br /><a href="https://www.kalamuna.com/news/3-simple-tips-ux-button-design" target="_blank" rel="noopener noreferrer">3 Simple Tips on UX Button Design</a></p>
          <p>2. Check out this link to see what good website usability for deaf people looks like.<br />
            <a href="https://www.hearinglikeme.com/5-ways-to-make-websites-more-accessible-for-deaf-people/" target="_blank" rel="noopener noreferrer">5 ways to make Websites more Accessible for Deaf People</a></p>
          <p>3. Colors with high contrasts or at opposite ends of the color spectrum are ideal for those with color blindness.<br />
            <a href="https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html" target="_blank" rel="noopener noreferrer">Color Blindness & Web Design</a></p>
          <p>4. Utilize a readability analyzing tool to see what grade level your content is written at.<br />
            <a href="https://datayze.com/readability-analyzer" target="_blank" rel="noopener noreferrer">Readability Analyzer</a></p>
          <p>5. Necessary gestures for an application or website should be kept to a minimal amount of hands and fingers and a minimal amount of movement and precision.</p></div>
      })
    }
    else if (assessPage == 1) {
      this.setState({
        help: <div><h3>Response Time</h3>
          <p>1. Repeatedly measure your action response times with a tool to determine how different each try is from another.</p>
          <p>2. Measure your critical action response times with a tool to determine how quickly they perform.</p>
          <p>3. Look for things like hourglass symbols or loading screens that inform the user of long waits.</p>
          <p>4. When a long wait is necessary, try working on another task in the application or website concurrently.</p>
          <p>5. Review any contingency plans for your application or website for excessive user loads or crashes.</p></div>
      })
    }
    else if (assessPage == 2) {
      this.setState({
        help: <div><h3>Help Facilities</h3>
          <p>1. Reach a help document from within your website or application</p>
          <p>2. Try reaching a help document from multiple screens in short times.</p>
          <p>3. For any actions you anticipate to be confusing for users, try accessing a tip or help for them at that time.</p>
          <p>4. Consider a user with lower knowledge than your typical anticipated user, and imagine how they would fare.</p>
          <p>5. Review help documents and consider having others review them for their input on document clarity.</p></div>
      })
    }
    else if (assessPage == 3) {
      this.setState({
        help: <div><h3>Error Handling</h3>
          <p>1. Review error messages and consider having others review them for their input on error clarity.</p>
          <p>2. Check if critical errors provide any advice to the user.</p>
          <p>3. Check if every error warning displays side effects to the user.</p>
          <p>4. Produce some common errors and review how the user would tell the error has occurred.</p>
          <p>5. Review error messages to determine if any warnings blame or shame the user.</p></div>
      })
    }
    else if (assessPage == 4) {
      this.setState({
        help: <div><h3>Menu and Command Labeling</h3>
          <p>1. Review menus and shortcuts for any overlapping with other menus or shortcuts.</p>
          <p>2. Try to recall or write down critical action shortcuts without reviewing them.</p>
          <p>3. Check how much a user will be able to customize any existing shortcuts.</p>
          <p>4. Consider the sensibility of your menu layouts and hierarchies as well as labeling.</p>
          <p>5. Check similar shortcuts and commands across all your websites or applications in the same family.</p></div>
      })
    }
    else if (assessPage == 5) {
      this.setState({
        help: <div><h3>Internationalization</h3>
          <p>1. Research how intended markets typically layout pages for reading and compare it to yours.</p>
          <p>2. Similar to the first tip, determine how intended markets tend to stylize and space content.</p>
          <p>3. Research the intended markets for similar symbolic meaning for any symbols and icons you've chosen to use.</p>
          <p>4. Research any potentially inflammatory content in the intended markets that you're using.</p>
          <p>5. Review the quality of translations for intended markets, and consider doing so with others.</p></div>
      })
    }
    else if (assessPage == 6) {
      this.setState({
        help: <div><h3>Results</h3>
          <p>Here are your results. Make sure to check out some of the recommended resources for improving your website or application's accessibility. You can also redo the assessment if you wish, or feel free to save your results as a PDF.</p></div>
      })
    }
  }

  handleChange = (counter) => {
    window.scrollTo(0, 0)
    if (counter == 0) {
      this.setState({
        page: <HomePage handleChangeC={this.handleChange} />
      })
      this.setState({
        help: <div><h3>Home</h3>
          <p>Click the question mark icon on any of the pages to get page-specific information.</p>
          <p>Here on the home page, read a little about the assessment and begin, or explore the FAQ and/or Help and References pages.</p></div>
      })
    }

    else if (counter == 1) {
      //this.setState(<FAQPage/>)
      this.setState({
        page: <FAQPage />
      })
      this.setState({
        help: <div><h3>Frequently Asked Questions</h3>
          <p>The Frequently Asked Questions page provides some information for the questions we find to be common.</p></div>
      })
    }

    else if (counter == 2) {
      this.setState({
        page: <HelpMorePage />
      })
      this.setState({
        help: <div><h3>Help and References</h3>
          <p>The Help and References page provides information about the assessment, project, development team, and the resources that went into our assessment.</p></div>
      })
    }

    else if (counter == 3) {
      this.assessChange(0)
      this.setState({
        page: <AssessmentPage assessChangeC={this.assessChange} />
      })
    }
  }

  state = {
    page: <HomePage handleChangeC={this.handleChange} />,
    counter: 0,
    popupActive: false,
    help: <div><h3>Home</h3>
      <p>Click the question mark icon on any of the pages to get page-specific information.</p>
      <p>Here on the home page, read a little about the assessment and begin, or explore the FAQ and/or Help and References pages.</p></div>
  };

  setPopup = () => {
    this.setState({
      popupActive: !this.state.popupActive
    })
  }

  render() {
    return (
      <div>
        <div class="topbar">
          <button class="topButton" onClick={() => { this.handleChange(0) }}> HOME</button>

          <button class="topButton" onClick={() => { this.handleChange(1) }}> FAQ</button>

          <button class="topButton" onClick={() => { this.handleChange(2) }}> HELP & MORE</button>
        </div>
        <div class="page-container">
          {this.state.page}
        </div>

        <div class="help">
          <button class="helpButton" onClick={() => { this.setPopup() }}>?</button>
        </div>

        <div class="footer">
          The University of Michigan-Dearborn | Group 7
        </div>

        <Popup trigger={this.state.popupActive} setTrigger={this.setPopup}>
          {this.state.help}
        </Popup>
      </div>
    );
  }
}

export default NavigationBar;
