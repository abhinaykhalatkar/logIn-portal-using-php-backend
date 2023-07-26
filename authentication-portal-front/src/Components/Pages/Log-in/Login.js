import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import orSep from "../../../Assets/orSep.svg";
import logInIcon from "../../../Assets/login.svg";
import InputCheckModule from "../../Units/InputCheck.js/InputCheck";
import { motion } from "framer-motion";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  const handlePasswordValidation = (val) => {
    return;
  };
  return (
    <motion.div
      className="p-LogIn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sideStyle">
        {email === "" && pass === "" ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={logInIcon}
            alt="Logo"
          />
        ) : (
          <InputCheckModule
            email={email}
            password={pass}
            handlePasswordValidation={handlePasswordValidation}
            fromSignInPage={false}
          />
        )}
      </div>
      <div className="auth-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email!"
            id="email"
            name="email"
            autoComplete="current-email"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter Password!"
            id="password"
            name="password"
            autoComplete="current-password"
          />
          <button type="submit" disabled={pass===""}>Log In</button>
        </form>

        <img src={orSep} alt="Logo" />
        <Link to="/Sign-up">
          <button className="link-btn">
            Don't have an account? Register <span>here</span>.
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
export default Login;
