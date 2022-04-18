import React from "react";
import "../styles.css";
import image from "../stars.jpg";

//Sivun päätitle
export function TitleBar({ title }) {
  return <div className="titleDiv">{title}</div>;
}

//Antaa infoa sivun käyttämisestä
export function Info({ text }) {
  return <div className="info">{text}</div>;
}

//Vaihtaa "submit"-napin alapuolella olevien laatikoiden tekstiä
//Näyttää niissä, mitä nappeja on viimeksi painanut
export function InfoText({ text }) {
  return <div className="infoDiv">{text}</div>;
}

//Antaa merkki-muuttujalle napin arvon
export function getSign(buttonName) {
  return { sign: buttonName };
}

//Antaa aika-muuttujalle napin arvon
export function getDate(buttonName) {
  return { date: buttonName };
}

//Renderöi haetun datan tiedot omassa laatikossa
export function RenderData({ data }) {
  return (
    <div
      className="renderData"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      Current Date: {data.current_date} <br />
      Compatibility: {data.compatibility} <br />
      Lucky Number: {data.lucky_number} <br />
      Lucky Time: {data.lucky_time} <br />
      Color: {data.color} <br />
      Date Range: {data.date_range} <br />
      Mood: {data.mood} <br />
      Description: {data.description} <br />
    </div>
  );
}
