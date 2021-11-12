import React, { Component } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/Header.css";

//This component render the Header of each page

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo className="nav-link header-logo" />
        <ul className="nav-links">
          <li className="nav-link">Accueil</li>
          <li className="nav-link">Profil</li>
          <li className="nav-link">Réglage</li>
          <li className="nav-link">Communauté</li>
        </ul>
      </div>
    );
  }
}
