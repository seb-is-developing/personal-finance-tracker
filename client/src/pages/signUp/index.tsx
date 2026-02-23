import MainNavBar from "../../components/mainNavBar";
import "./signUp.css";
export default function SignUp() {
  return (
    <>
      <MainNavBar />
      <div className="register-form-container">
        <form className="register-form">
          <h1 className="register-form-title">Sign Up</h1>
          <label className="register-label">Full Name:</label>
          <input type="text" name="fullName" className="register-input" />
          <label className="register-label">Username:</label>
          <input type="text" name="username" className="register-input" />
          <label className="register-label">Email:</label>
          <input
            type="email"
            name="email"
            className="register-input"
            placeholder="john.doe@example.com"
          />
          <label className="register-label">Password:</label>
          <input type="password" name="password" className="register-input" />
          <button className="register-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
