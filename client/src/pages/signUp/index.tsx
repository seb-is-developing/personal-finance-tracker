import MainNavBar from "../../components/mainNavBar";
import "./signUp.css";
import { useState } from "react";

export default function SignUp() {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,    
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <MainNavBar />
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1 className="register-form-title">Sign Up</h1>
          <label className="register-label">Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="register-input"
            placeholder="John Doe"
            value={userData.fullName}
            onChange={handleChange}
          />
          <label className="register-label">Username:</label>
          <input
            type="text"
            name="username"
            className="register-input"
            placeholder="johndoe123"
            value={userData.username}
            onChange={handleChange}
          />
          <label className="register-label">Email:</label>
          <input
            type="email"
            name="email"
            className="register-input"
            placeholder="john.doe@example.com"
            value={userData.email}
            onChange={handleChange}
          />
          <label className="register-label">Password:</label>
          <input
            type="password"
            name="password"
            className="register-input"
            placeholder="********"
            value={userData.password}
            onChange={handleChange}
          />
          <button className="register-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
