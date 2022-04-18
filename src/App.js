import React from "react";
import "./styles.css";
import {
  TitleBar,
  InfoText,
  getDate,
  getSign,
  RenderData,
  Info
} from "./components/general";
import ButtonPanel from "./components/ButtonPanel";

export default class App extends React.Component {
  //Määritetään staten muuttujien alkuarvot
  state = {
    json: {},
    sign: null,
    date: null
  };

  //Tarkasta, mitä nappia on painettu
  handleClick = (buttonName) => {
    if (
      //Aikanapit
      buttonName === "Today" ||
      buttonName === "Tomorrow" ||
      buttonName === "Yesterday"
    ) {
      //Annetaan staten date-muuttujalle napin arvo setStaten avulla
      this.setState(getDate(buttonName));
      console.log(this.state.date);
    }
    if (
      //Merkkinapit
      buttonName === "Aries" ||
      buttonName === "Taurus" ||
      buttonName === "Gemini" ||
      buttonName === "Cancer" ||
      buttonName === "Leo" ||
      buttonName === "Virgo" ||
      buttonName === "Libra" ||
      buttonName === "Scorpio" ||
      buttonName === "Sagittarius" ||
      buttonName === "Capricorn" ||
      buttonName === "Aquarius" ||
      buttonName === "Pisces"
    ) {
      //Annetaan staten sign-muuttujalle napin arvo setStaten avulla
      this.setState(getSign(buttonName));
      console.log(this.state.sign);
    }
  };

  //Hae data URLista, päivittyy aina kun "submit"-nappia painetaan
  fetchData = () => {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=${this.state.date}`;
    fetch(URL, {
      method: "POST"
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  };

  //Renderöidään sovelluksen päänäkymä
  render() {
    return (
      <div className="component-app">
        <TitleBar title="Get your astrological sign data" />
        <Info text="Just click a sign and a date and then submit them by clicking ''Submit''" />
        <ButtonPanel clickHandler={this.handleClick} />
        <button className="submit-button" onClick={this.fetchData}>
          Submit
        </button>
        <InfoText text={this.state.sign} />
        <InfoText text={this.state.date} />
        <RenderData data={this.state.json} />
      </div>
    );
  }
}
