import React from "react";

import images from "../assets/images/recruitmentImages/recruitmentImages.js";

/* Image Buttons in About Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  /* renders sub buttons */
  render() {
    let counterClass = "faq-counter";
    if (this.props.mobile) {
      counterClass = "faq-counter-m";
    }
    let button = (
      <div
        className="faq-expand-button"
        onClick={() => this.setState({ expanded: true })}
      >
        <img className="arrow" src={images.downArrow} alt="" />
      </div>
    );
    if (this.state.expanded) {
      button = (
        <div
          className="faq-expand-button"
          onClick={() => this.setState({ expanded: false })}
        >
          <img className="arrow" src={images.leftArrow} alt="" />
        </div>
      );
    }
    let count = this.props.index + 1;
    if (count < 10) {
      count = "0".concat(count.toString());
    }
    return (
      <div className="faq-container">
        <div className={counterClass}>{count}</div>
        <div className="faq-question-text">
          <div className="faq-question">
            {this.props.question}
            {button}
          </div>
          {this.state.expanded && (
            <div className="answer">{this.props.answer}</div>
          )}
        </div>
      </div>
    );
  }
}
