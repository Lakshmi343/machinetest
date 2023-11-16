import axios from "axios";
import { useState } from "react";
import { errorToast, successToast } from "../Toastify/Toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmitData = async (e) => {
    e.preventDefault();

    console.log(email, password);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );
      console.log(response, "ress");
      if (response.data) {
        successToast("success");
        navigate("/admin");
      } else {
        errorToast(response.data.message);
      }
    } catch (error) {
      errorToast(error.response.data.message);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column", justifyContent: "center", padding: "0 1rem" }}>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <h2 style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "#1a202c" }}>
          Sign in to your account
        </h2>

        <form style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column" }} onSubmit={handleSubmitData}>
          <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "medium", color: "#4a5568" }}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleEmail}
            autoComplete="email"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #e2e8f0",
              marginBottom: "1rem",
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "medium", color: "#4a5568" }}>
              Password
            </label>
            <a href="#" style={{ fontSize: "0.875rem", fontWeight: "semibold", color: "#4a5568", textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            onChange={handlePassword}
            type="password"
            autoComplete="current-password"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #e2e8f0",
              marginBottom: "1rem",
            }}
          />

       <Link to="/admin">   <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.375rem",
              backgroundColor: "#4a5568",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Sign in
          </button></Link>

          <Link to="user/register" style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", fontWeight: "semibold", color: "#4a5568", textDecoration: "none" }}>
            Register Now
          </Link>
        </form>

        <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem", color: "#4a5568" }}>
          Not a member?{" "}
          <a href="#" style={{ fontWeight: "semibold", color: "#4299e1", textDecoration: "none" }}>
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
