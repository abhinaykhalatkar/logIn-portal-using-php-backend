import React, { useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import "./Login.scss";
import orSep from "../../../Assets/orSep.svg";
import logInIcon from "../../../Assets/login.svg";
import InputCheckModule from "../../Units/InputCheck.js/InputCheck";
import { motion } from "framer-motion";

export const Login = ({ setIsUserLoggedIn, setUserName })=> {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordValidation = () => {
    return pass===""?false:true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/authentication-portal-back/login.php", {
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        if (response.data.userFound) {
          setIsUserLoggedIn(response.data.userFound);
          setUserName(response.data.userName);
          navigate("/");
        }
      })
      .catch((error) => {
        setMessage("Error occurred during login.");
      });
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
        {message && <p>{message}</p>}

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
