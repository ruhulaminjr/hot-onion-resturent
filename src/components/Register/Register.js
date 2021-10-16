import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../context/useAuth";
import logo from "../../images/logo2.png";
import "./register.css";

const Register = () => {
  const { emailSignIn, auth, setUserName } = useAuth();
  const [error, setError] = useState(null);
  const histoy = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const setEmailHanler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const setNameHandler = (e) => {
    setName(e.target.value);
  };
  const emailLoginHandler = (e) => {
    e.preventDefault();
    emailSignIn(auth, email, password)
      .then((result) => {
        setUserName(name);
        histoy.push("/");
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
            type="text"
            className="input-field"
            placeholder="Name"
            onBlur={setNameHandler}
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            onBlur={setEmailHanler}
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
            Register
          </button>
        </form>
        {error && (
          <p style={{ textAlign: "center", margin: "1rem 0", color: "red" }}>
            {error}
          </p>
        )}
        <p style={{ textAlign: "center", margin: "1rem 0", color: "#F91944" }}>
          Already have an account ?
        </p>
      </div>
    </div>
  );
};

export default Register;
