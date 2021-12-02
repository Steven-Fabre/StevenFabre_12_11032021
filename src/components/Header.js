import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";

//This component render the Header of each page

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="nav-link header-logo" />
      </Link>
      <ul className="nav-links">
        <li className="nav-link">Accueil</li>
        <li className="nav-link">Profil</li>
        <li className="nav-link">Réglage</li>
        <li className="nav-link">Communauté</li>
      </ul>
    </div>
  );
}
