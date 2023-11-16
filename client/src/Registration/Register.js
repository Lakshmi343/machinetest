import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Toastify/Toast";

const Register = () => {
  const navigate = useNavigate();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => setPassword(e.target.value);
  console.log(setPassword)

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  

  const handleSubmitData = async (e) => {
    e.preventDefault();

    console.log(username, email, password);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        { username, email, password }
      );

      console.log(response, "ress");

      if (response.data) {
        successToast("Success");
        navigate("/");
      } else {
        errorToast(response.data.message);
      }
    } catch (error) {
      errorToast(error.response.data.message);
    }
  };

  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column", justifyContent: "center", padding: "0 1rem" }}>
        <div style={{ maxWidth: "400px", margin: "auto" }}>
          
          <h2 style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "#1a202c" }}>
            Sign up for an account
          </h2>
        </div>

        <div style={{ marginTop: "1.5rem", maxWidth: "400px", margin: "auto" }}>
          <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmitData}>
            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "medium", color: "#4a5568" }}>
              Username
            </label>
            <input
              type="text"
              onChange={handleName}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
              }}
            />

            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "medium", color: "#4a5568" }}>
              Email address
            </label>
            <input
              type="email"
              onChange={handleEmail}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
              }}
            />

            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "medium", color: "#4a5568" }}>
              Password
            </label>
            <input
              type="password"
              onChange={handlePassword}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
              }}
            />

          <Link to="/admin"> <button
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
              Sign up
            </button></Link> 
          </form>

          <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem", color: "#4a5568" }}>
            Already a member?{' '}
            <Link
              to="/your-login-page"
              style={{ fontWeight: "semibold", color: "#4299e1", textDecoration: "none" }}
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

