import React, { useState } from "react";
import ColorCard from "../UI/ColorCard";
import "./LoginTemplate.module.css";

const RegisterTemplate = (props) => {
  const [userName, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [loginType, setLoginType] = useState("");

  const userNamedHandler = (e) => {
    setUserName(e.target.value);
  };

  const emailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const rePasswordHandler = (e) => {
    setRePassword(e.target.value);
  };

  const LoginUser = (e) => {
    setLoginType("LoginForm");
  };
  const RegisterUser = (e) => {
    setLoginType("NewUserRegister");
  };

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
    if (loginType === "LoginForm") {
      const userLoginDetails = {
        loginType: {
          type: loginType,
        },
      };
      props.onUserLoginSubmit(userLoginDetails);
    } else if (password === "" || repassword === "") {
      alert("Password Can't be blank");
      return;
    } else if (password !== repassword) {
      alert("Both password should be same");
      return;
    } else if (password === repassword) {
      console.log("password:" + password);
      const userLoginDetails = {
        loginDetails: {
          userEmailId: emailId,
          userPassword: password,
          userName: userName,
        },
        loginType: {
          type: loginType,
        },
      };
      props.onUserLoginSubmit(userLoginDetails);
      setEmailId("");
      setPassword("");
      return;
    }
  };

  return (
    <ColorCard style={{ border: "none" }} title="ZigZak Login">
      <form
        className="row gy-2 gx-3 align-items-center"
        onSubmit={LoginSubmitHandler}
      >
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            User Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Sunil Kumar"
              onChange={userNamedHandler}
              value={userName}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            Email Id
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="SunilKumar@xyz.com"
              onChange={emailIdHandler}
              value={emailId}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="autoSizingInput"
              placeholder="*******"
              onChange={passwordHandler}
              value={password}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            ReType-Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="autoSizingInput"
              placeholder="*******"
              onChange={rePasswordHandler}
              value={repassword}
            />
          </div>
        </div>
        <div className="col-sm-10">
          <button
            type="submit"
            className="btn btn-outline-danger"
            onClick={RegisterUser}
          >
            Register
          </button>
        </div>
        <div className="col-sm-1">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={LoginUser}
          >
            login
          </button>
        </div>
      </form>
    </ColorCard>
  );
};

export default RegisterTemplate;
