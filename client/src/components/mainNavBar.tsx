import "./mainNavBar.css";
import { Link } from "react-router-dom";

export default function MainNavBar() {
  return (
    <nav className="main-nav-bar">
      <div className="logo">Personal Finance Tracker</div>
      <ul className="nav-links">
        <li>
          <Link className="main-nav-bar-buttons" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-nav-bar-buttons" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="main-nav-bar-buttons" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="main-nav-bar-buttons" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="main-nav-bar-buttons" to="/sign-up">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
