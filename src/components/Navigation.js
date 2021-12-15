/**
 * First Page for developpers
 * Easy switch between Users
 * @Link is used to navigate
 */

import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1> Choisissez votre utilisateur </h1>
      <ul>
        <li>
          <Link to="/user/12">Utilisateur n°12 (Karl)</Link>
        </li>
        <li>
          <Link to="/user/18">Utilisateur n°18 (Cécilia)</Link>
        </li>
      </ul>
    </div>
  );
}
