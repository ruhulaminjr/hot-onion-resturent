import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
import logo from "../../images/logo2.png";

const Login = () => {
  const { loginWithEmail, auth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/";
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailLoginHandler = (e) => {
    e.preventDefault();
    loginWithEmail(auth, email, password)
      .then((result) => {
        history.push(redirectUrl);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container w100">
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <img src={logo} alt="" style={{ width: "200px" }} />
      </div>
      <div className="signUp">
        <form onSubmit={emailLoginHandler}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            onBlur={setEmailHandler}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            onBlur={setPasswordHandler}
            required
          />
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
        {error && (
          <p
            style={{ textAlign: "center", margin: "1rem 0", color: "#F91944" }}
          >
            {error}
          </p>
        )}
        <p style={{ textAlign: "center", margin: "1rem 0", color: "#F91944" }}>
          <Link to="/register">Don't have an account ?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
