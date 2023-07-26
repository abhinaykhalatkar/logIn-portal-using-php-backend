import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./InputCheck.scss";
import CompleatedImg from "../../../Assets/Completed.svg";
import {
  EmailInputValidation,
  PasswordInputValidation,
} from "../InputValidation";

export const InputCheckModule = ({
  email,
  password,
  fromSignInPage,
  handlePasswordValidation=false,
  isRightEmail = true,
}) => {
  const [isEmailValid, setEmailValid] = useState(false);
  const [PasswordValidation, setPasswordValidation] = useState({});
  const [isFullPasswrodValid, setIsFullPasswordValid] = useState(false);

  useEffect(() => {
    setEmailValid(EmailInputValidation(email));
    const passwordValidationResult = PasswordInputValidation(password);
    setPasswordValidation(passwordValidationResult);
    setIsFullPasswordValid(
      passwordValidationResult.isPasswordMinLength &&
        passwordValidationResult.hasCapitalLetter &&
        passwordValidationResult.hasSmallLetter &&
        passwordValidationResult.hasSpecialCharacter &&
        passwordValidationResult.hasNumber
    );
  }, [email, password]);

  useEffect(() => {
    handlePasswordValidation(isFullPasswrodValid && isEmailValid);
  }, [isFullPasswrodValid, handlePasswordValidation, isEmailValid]);
  return (
    <>
      {isEmailValid && (!fromSignInPage || isFullPasswrodValid) ? (
        <motion.img
          src={CompleatedImg}
          alt="Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.div
          className="c-InputCheckModule"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`email-validation ${
                isEmailValid && isRightEmail ? "d-none" : ""
              }`}
            >
              {isEmailValid ? null : <p>Invalid Email !</p>}

              {isRightEmail ? null : <p> Email already Registerd !</p>}
            </motion.div>

            <motion.div
              className="password-validation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {!fromSignInPage ? null : (
                <label htmlFor="checkbox-1" className="form-control">
                  <input
                    type="checkbox"
                    id="checkbox-1"
                    name="checkbox-1"
                    checked={PasswordValidation.isPasswordMinLength}
                    disabled
                  />
                  Need at least 8 charecter
                </label>
              )}

              {!fromSignInPage ? null : (
                <label htmlFor="checkbox-2" className="form-control">
                  <input
                    type="checkbox"
                    id="checkbox-2"
                    name="checkbox-2"
                    checked={PasswordValidation.hasCapitalLetter}
                    disabled
                  />
                  Need at least 1 capital letter[A...Z]
                </label>
              )}
              {!fromSignInPage ? null : (
                <label htmlFor="checkbox-3" className="form-control">
                  <input
                    type="checkbox"
                    id="checkbox-3"
                    name="checkbox-3"
                    checked={PasswordValidation.hasSmallLetter}
                    disabled
                  />
                  Need at least 1 small letter[a...z]
                </label>
              )}
              {!fromSignInPage ? null : (
                <label htmlFor="checkbox-4" className="form-control">
                  <input
                    type="checkbox"
                    id="checkbox-4"
                    name="checkbox-4"
                    checked={PasswordValidation.hasSpecialCharacter}
                    disabled
                  />
                  Need at least 1 special charecter [!...$]
                </label>
              )}
              {!fromSignInPage ? null : (
                <label htmlFor="checkbox-5" className="form-control">
                  <input
                    type="checkbox"
                    id="checkbox-5"
                    name="checkbox-5"
                    checked={PasswordValidation.hasNumber}
                    disabled
                  />
                  Need at lest 1 number [0...9]
                </label>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default InputCheckModule;
