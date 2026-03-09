import Footer from "../../components/footer";
import MainNavBar from "../../components/mainNavBar";
import "./signUp.css";
import { useState } from "react";
import { registerUser } from "../../api/api";
interface UserData {
  fullName: string;
  username: string;
  email: string;
  passwordHash: string;
}

interface ErrorState {
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  general?: string;
}

export default function SignUp() {
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    username: "",
    email: "",
    passwordHash: "",
  });
  const [error, setError] = useState<ErrorState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (data: UserData): ErrorState => {
    const next: ErrorState = {};

    if (!data.fullName.trim()) next.fullName = "Full name is required";
    if (!data.username.trim()) next.username = "Username is required";
    if (!data.email.trim()) next.email = "Email is required";
    if (!data.passwordHash) next.password = "Password is required";
    if (data.passwordHash && data.passwordHash.length < 6)
      next.password = "Password must be at least 6 characters";

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fieldErrors = validate(userData);
    if (Object.keys(fieldErrors).length > 0) {
      setError(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await registerUser(userData);

      const result = await registerUser(userData);
      if (result.token) {
        localStorage.setItem("token", result.token);
        // optionally store user info
      }
      setUserData({ fullName: "", username: "", email: "", passwordHash: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Registration failed";
      setError({ general: message });
    } finally {
      setIsSubmitting(false);
    }
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
          {error.fullName && <p className="error-text">{error.fullName}</p>}
          <label className="register-label">Username:</label>
          <input
            type="text"
            name="username"
            className="register-input"
            placeholder="johndoe123"
            value={userData.username}
            onChange={handleChange}
          />
          {error.username && <p className="error-text">{error.username}</p>}

          <label className="register-label">Email:</label>
          <input
            type="email"
            name="email"
            className="register-input"
            placeholder="john.doe@example.com"
            value={userData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error-text">{error.email}</p>}

          <label className="register-label">Password:</label>
          <input
            type="password"
            name="passwordHash"
            className="register-input"
            placeholder="********"
            value={userData.passwordHash}
            onChange={handleChange}
          />
          {error.password && <p className="error-text">{error.password}</p>}

          <button
            className="register-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
