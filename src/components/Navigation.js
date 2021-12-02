import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1> Utilisation de données mockées </h1>
      <ul>
        <li>
          <Link to="/local/12">Utilisateur n°12</Link>
        </li>
        <li>
          <Link to="/local/18">Utilisateur n°18</Link>
        </li>
      </ul>

      <h1> Utilisation de l'API </h1>
      <ul>
        <li>
          <Link to="/api/12">Utilisateur n°12</Link>
        </li>
        <li>
          <Link to="/api/18">Utilisateur n°18</Link>
        </li>
      </ul>
    </div>
  );
}
