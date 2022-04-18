import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
  };

  //Button-tapahtuma, kun nappia painetaan
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  //Renderöi napin
  render() {
    const className = ["component-button", this.props.wide ? "wide" : ""];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
