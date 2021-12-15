/**
 * Rendering component
 */

import React from "react";
import Zen from "../assets/zen.svg";
import Swim from "../assets/swim.svg";
import Bicycle from "../assets/bicycle.svg";
import Dumbell from "../assets/dumbell.svg";
import "../styles/VerticalLayout.css";

export default function VerticalLayout() {
  return (
    <div className="VerticalLayout">
      <div className="vl-logos">
        <img className="vl-logo" src={Zen} alt="Zen" />
        <img className="vl-logo" src={Swim} alt="Swim" />
        <img className="vl-logo" src={Bicycle} alt="Bicycle" />
        <img className="vl-logo" src={Dumbell} alt="Dumbell" />
      </div>
      <p className="vl-copyright">Copiryght, SportSee 2020</p>
    </div>
  );
}
