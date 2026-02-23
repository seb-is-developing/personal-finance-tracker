import "./mainNavBar.css";

export default function MainNavBar() {
  return (
    <nav className="main-nav-bar">
      <div className="logo">Personal Finance Tracker</div>
      <ul className="nav-links">
        <li>
          <button className="main-nav-bar-buttons">home</button>
        </li>
        <li>
          <button className="main-nav-bar-buttons">about</button>
        </li>
        <li>
          <button className="main-nav-bar-buttons">contact</button>
        </li>
        <li>
          <button className="main-nav-bar-buttons">login</button>
        </li>
      </ul>
    </nav>
  );
}
