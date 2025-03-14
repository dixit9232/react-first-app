import { useState, useEffect } from "react";
import { NavLink } from "react-router"; // Ensure correct import
import "../../css/Header.css";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close Drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Close drawer automatically on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="brand">
          <NavLink className="header-text" to="/">
            Movie Flex
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={toggleDrawer}>
          ☰
        </button>

        {/* Navigation Links (Hidden in Mobile) */}
        <nav className="nav-links">
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
        </nav>
      </header>

      {/* Drawer Navigation for Mobile */}
      <div className={`drawer ${isDrawerOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeDrawer}>
          ×
        </button>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" onClick={closeDrawer}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={closeDrawer}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies" onClick={closeDrawer}>
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" onClick={closeDrawer}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isDrawerOpen && <div className="overlay" onClick={closeDrawer}></div>}
    </>
  );
};
