import MainNavBar from "../../components/mainNavBar";
import Footer from "../../components/footer";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import "./login.css";
interface LoginData {
  email: string;
  passwordHash: string;
}

export default function Login() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmitHandler: SubmitHandler<LoginData> = async (data) => {
    setApiError(null);
    setLoading(true);
    try {
      const result = await loginUser(data.email, data.passwordHash);
      if (result.token) {
        localStorage.setItem("token", result.token);
        // optionally store user info
        navigate("/");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setApiError(err.message);
      } else {
        setApiError("An unexpected error occurred");
      }
    } finally {
      console.log("Login attempt finished");
      setLoading(false);
    }
  };
  return (
    <>
      <MainNavBar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h1 className="login-form-title">Login</h1>
          {apiError && <p className="error-text">{apiError}</p>}
          <label className="login-label">Email:</label>
          <input
            type="text"
            className="login-input"
            placeholder="john.doe@example.com"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
          <label className="login-label">Password:</label>
          <input
            type="password"
            className="login-input"
            {...register("passwordHash", { required: "Password is required" })}
            placeholder="••••••••"
          />
          {errors.passwordHash && (
            <p className="error-text">{errors.passwordHash.message}</p>
          )}
          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
