import React, { useState } from "react";
import './Login.scss'
import orSep from '../../../Assets/orSep.svg'
import logInIcon from '../../../Assets/login.svg'
import { EmailInputValidation, PasswordInputValidation } from "../../Units/InputValidation";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,pass);
  };

  return (
    <div className="p-LogIn">
      <div className="sideStyle">
        {email===""&&pass===""?<img src={logInIcon} alt="Logo" />:<h1>Wrong</h1>}
      

      </div>
      <div className="auth-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => 
                {console.log(e.target.value)
                setEmail(e.target.value)}}
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
          <button type="submit">Log In</button>
        </form>
        
        <img src={orSep} alt="Logo" />
        <button
          className="link-btn"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Don't have an account? Register <span>here</span>.
        </button>
      </div>
    </div>
  );
};
export default Login;
