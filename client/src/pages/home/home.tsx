import "./home.css";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="text">
          <div className="title">
            <h1>Welcome to the Personal Finance Tracker</h1>
          </div>
          <div className="description">
            <h2>Take Control of Your Money with Clarity and Confidence</h2>
            <p>
              Track your income, expenses, savings, and investments in one
              intuitive dashboard. Gain real-time insights into where your money
              goes, set meaningful financial goals, and build smarter habits
              backed by clear data. Whether you're budgeting monthly expenses or
              planning long-term wealth, this tracker gives you the structure
              and visibility to stay in control.
            </p>
          </div>
        </div>
      </section>
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
