import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  };

  //Button-tapahtuma, kun nappia painetaan
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  //Renderöi nappirivistö, jolla valitaan haettava data
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="Aries" clickHandler={this.handleClick} />
          <Button name="Taurus" clickHandler={this.handleClick} />
          <Button name="Gemini" clickHandler={this.handleClick} />
          <Button name="Cancer" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="Leo" clickHandler={this.handleClick} />
          <Button name="Virgo" clickHandler={this.handleClick} />
          <Button name="Libra" clickHandler={this.handleClick} />
          <Button name="Scorpio" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="Sagittarius" clickHandler={this.handleClick} />
          <Button name="Capricorn" clickHandler={this.handleClick} />
          <Button name="Aquarius" clickHandler={this.handleClick} />
          <Button name="Pisces" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="Today" clickHandler={this.handleClick} wide />
          <Button name="Tomorrow" clickHandler={this.handleClick} wide />
          <Button name="Yesterday" clickHandler={this.handleClick} wide />
        </div>
      </div>
    );
  }
}
