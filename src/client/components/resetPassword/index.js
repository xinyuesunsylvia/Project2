import React, { useState } from "react";

import { LOGIN_FORM } from "../content/form";
import "./index.css";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!email) {
      setEmailError(LOGIN_FORM.EMAIL.REQUIRED_MESSAGE);
    } else if (!isValid) {
      setEmailError(LOGIN_FORM.EMAIL.ERROR_MESSAGE);
    } else {
      setEmailError(null);
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);

    if (isEmailValid) {
      console.log(LOGIN_FORM.EMAIL.LABEL, email);
      // const response = await api.loginApi({
      //   customerType: CONSTANTS.USER_TYPE.CUSTOMER,
      //   email: email.value,
      //   loginCode: parseInt(code.value),
      //   rememberMe: check,
      // });
      // if (response.status !== StatusCodes.OK) {
      //   throw new Error(
      //     `Login API response status error: ${JSON.stringify(response)}`
      //   );
      // } else {
      //   handleOnLogin();
      // }
    }
  };
  return (
    <>
      <div className="reset">
        <h2 className="title">Update your password</h2>
        <div className="tutorial">
          Enter your email link, we will send you the recovery link
        </div>
        <form className="reset-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className={emailError ? "error-input" : ""}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={LOGIN_FORM.EMAIL.PLACE_HOLDER}
            id="email"
            name="email"
          />
          {emailError && <div className="error-email">{emailError}</div>}
          <button id="submit" type="submit">
            Update password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
