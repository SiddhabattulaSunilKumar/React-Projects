import React, { useState } from "react";
import myPortalStyles from "./MyPortal.module.css";

let loginDetails = {
    UserName : '',
    UserPassword : '',
    LoginStatus : false
}

const LoginForm = (props) => {
  const [loginUsrName, setLoginUsrName] = useState("");
  const [loginUsrPass, setLoginUsrPass] = useState("");

  const UserNameChangeHandler = (e) => {
    setLoginUsrName(e.target.value);
  };

  const UserPasswordChangeHandler = (e) => {
    setLoginUsrPass(e.target.value);
  };

  const LoginFormSubmitHandler = (e) => {
    e.preventDefault();
     loginDetails = {
        UserName : loginUsrName,
        UserPassword : loginUsrPass,
        LoginStatus : true
    }
    props.onLoginFormSubmit(loginDetails)
  };

  return (
    <form onSubmit={LoginFormSubmitHandler}>
      <div className={myPortalStyles.card}>
        <div>
          <label htmlFor="UserName">Name:</label>
          <input
            name="UserName"
            id="UserName"
            onChange={UserNameChangeHandler}
            value={loginUsrName}
          />
        </div>
        <div>
          <label htmlFor="UserPassword">Password:</label>
          <input
            name="UserPassword"
            id="UserPassword"
            onChange={UserPasswordChangeHandler}
            value={loginUsrPass}
          />
        </div>
        <br />
        <button className={myPortalStyles.buttonGreen} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
