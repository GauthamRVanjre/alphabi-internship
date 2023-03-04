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

  /**
   * When the user types in the email input field, the value of the input field is set to the state of
   * the email variable.
   * @param event - The event object is a JavaScript event that is sent to an element when an event
   * occurs on the element.
   */
  const handleEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  /**
   * If the password is longer than 6 characters, the email is longer than 0 characters, and the
   * password is longer than 0 characters, then create a user with the email and password, log the
   * user, set the sign up success to true, and navigate to the search page. The createUserWithEmailAndPassword
   * function is a Firebase function that creates a user with the email and password. The auth
   * variable is the Firebase authentication object.
   */
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
