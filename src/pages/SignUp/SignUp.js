import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const register = async () => {
    try {
      if (
        registerPassword.length > 6 ||
        registerEmail.length > 0 ||
        registerPassword.length > 0
      ) {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
        setSignUpSuccess(true);
        navigate("/search");
      } else {
        setSignUpSuccess(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="sign-up-form">
        <div className="form-container">
          <h3>Please Sign up to continue</h3>
          <label className="input-fields-label">
            Enter your email :
            <input
              type="email"
              placeholder="email"
              onChange={handleEmailChange}
            />
          </label>
          <label className="input-fields-label">
            Enter your password :
            <input
              type="password"
              placeholder="password"
              onChange={handlePasswordChange}
            />
            <p className="alert-link">
              Password should be more than 6 characters
            </p>
          </label>
          <button className="sign-up-btn btn btn-dark" onClick={register}>
            Sign up
          </button>
        </div>
        <div
          className={signUpSuccess ? "alert alert-success" : "none"}
          role="alert"
        >
          Signup Successfull
        </div>
      </div>
    </div>
  );
};

export default SignUp;
