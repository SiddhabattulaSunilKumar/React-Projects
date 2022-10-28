import React, { useState } from "react";
import ColorCard from "../UI/ColorCard";
import "./LoginTemplate.module.css";

let userLoginDetails = {
    loginDetails: {
      userEmailId: '',
      userPassword: '',
    },
    loginType : {
        type : ''
    },
  }

const LoginTemplate = (props) => {

  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [loginType,setLoginType] = useState('')

 

  const emailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const LoginUser = e=>{
    setLoginType('ExsistingUserLogin');
  }
  const RegisterUser = e=>{
    setLoginType('RegisterForm');
  }


  const LoginSubmitHandler = (e) => {
    e.preventDefault();
     userLoginDetails = {
        loginDetails: {
          userEmailId: emailId,
          userPassword: password,
        },
        loginType : {
            type : loginType
        },
      }
    props.onUserLoginSubmit(userLoginDetails);
    setEmailId('');
    setPassword('');
  };

  return (
    <ColorCard style={{ border: "none" }} title="ZigZak Login">
      <form
        className="row gy-2 gx-3 align-items-center"
        onSubmit={LoginSubmitHandler}
      >
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
            Email Id
          </label>
          <div className="col-sm-9">
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
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-9">
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
        <div className="col-sm-8">
          <button type="submit" className="btn btn-outline-info" onClick={LoginUser}>
            Login
          </button>
        </div>
        <div className="col-sm-4">
          <button type="submit" className="btn btn-outline-warning" onClick={RegisterUser}>Register</button>
        </div>
      </form>
    </ColorCard>
  );
};

export default LoginTemplate;
