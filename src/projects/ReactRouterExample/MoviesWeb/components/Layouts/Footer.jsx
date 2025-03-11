import "../../css/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© 2025 Movie Flex. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
