import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div className="cat-check">
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="0"
                //checked={this.props.score === 0}
                defaultChecked={this.props.score === 0}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              Strongly Disagree |
                </label>
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="1"
                //checked={this.props.score === 1}
                defaultChecked={this.props.score === 1}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              Disagree |
                </label>
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="2"
                //checked={this.props.score === 2}
                defaultChecked={this.props.score === 2}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              Neutral |
                </label>
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="3"
                //checked={this.props.score === 3}
                defaultChecked={this.props.score === 3}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              Agree |
                </label>
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="4"
                //checked={this.props.score === 4}
                defaultChecked={this.props.score === 4}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              Strongly Agree |
                </label>
            <label class="radio">
              <input
                type="radio"
                category={this.props.category}
                name={this.props.index}
                value="-1"
                //checked={this.props.score === -1}
                defaultChecked={this.props.score === -1}
                onChange={this.props.onChange}
                className="cat-check-input"
              />
              N/A
                </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Question;
