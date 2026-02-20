import "./home.css";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="title">
          <h1>Welcome to the Personal Finance Tracker</h1>
        </div>
        <div className="description">
          <p>Track your income, expenses, and savings all in one place.</p>
        </div>
      </div>
      <div className="stories">
        <p>
          Discover how our users have transformed their financial lives with our
          app:
        </p>
      </div>
      <div className="pricing">
        <h2>Choose your plan</h2>
      </div>
    </>
  );
}
