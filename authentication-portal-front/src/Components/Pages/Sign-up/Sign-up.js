import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Log-in/Login.scss";
import orSep from "../../../Assets/orSep.svg";
import logInIcon from "../../../Assets/signup.svg";
import InputCheckModule from "../../Units/InputCheck.js/InputCheck";
import { motion } from "framer-motion";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isFullPasswrodValid, setIsFullPasswordValid] = useState(false);
  const [message, setMessage] = useState("");
  const [isConfirmPass, setIsConfirmPass] = useState(true);
  

  const handlePasswordValidation = (val) => {
    setIsFullPasswordValid(val);
  };
  
  const handleConfirmPass=(cPass)=>{
    setIsConfirmPass(pass===cPass)
  }

  const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, pass);
        console.log({ email, password: pass }); 
      

        axios
          .post("http://localhost/authentication-portal-back/register.php", {
            email: email,
            password: pass,
          })
          .then((response) => {
            console.log(response.data);
            setMessage(response.data.message);
            setEmail("");
            setPass("");
          })
          .catch((error) => {
            setMessage("Error occurred during registration.");
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
            src={logInIcon}
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <InputCheckModule
            email={email}
            password={pass}
            fromSignInPage={true}
            handlePasswordValidation={handlePasswordValidation}
          />
        )}
      </div>
      <div className="auth-form-container">
        <h1>Sign-Up</h1>
        <form className="login-form" onSubmit={handleRegistration}>
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
           <input
           className={`${!isConfirmPass?"red-border":""}`}
           onFocus={(e)=>{handleConfirmPass(e.target.value)}}
            onChange={(e)=>{handleConfirmPass(e.target.value)}}
            type="password"
            placeholder="Confirm Entered Password!"
            id="Cpassword"
            name="password"
            autoComplete="current-password"
          />
          {(!isConfirmPass) ? <p>{"repeated password not correct!"}</p>:null}
          <button disabled={!(isFullPasswrodValid && isConfirmPass)} type="submit">
            Sign-Up
          </button>
        </form>
        {message && <p>{message}</p>}

        <img src={orSep} alt="Logo" />
        <Link to="/LogIn">
          <button className="link-btn">
            Already have an account? Login <span>here</span>.
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
export default Signup;
