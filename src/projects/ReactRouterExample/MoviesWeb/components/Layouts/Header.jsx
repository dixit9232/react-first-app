import { NavLink } from "react-router";
import "../../css/Header.css";

export const Header = () => {
  return (
    <header className="header">
      
        <div className="brand">
          <NavLink className="header-text" to="/">Movie Flex</NavLink>
        </div>

        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
  
    </header>
  );
};
