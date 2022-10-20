import React, {useState} from "react";
import HomePage from "./Components/HomePaga";
import LoginForm from "./Components/LoginForm";

function App() {
  let loginDetails = {
    UserName: "",
    UserPassword: "",
    LoginStatus: false,
  };

  const [loginInfo, setLoginInfo] =useState(loginDetails);
  

  const LoginFormSubmitHandler = (userDetails) => {
    loginDetails = {
      UserName: userDetails.UserName,
      UserPassword: userDetails.UserPassword,
      LoginStatus: userDetails.LoginStatus,
    };
    setLoginInfo(loginDetails);
  };
  return (
    <div className="App">
      {!loginInfo.LoginStatus && (
        <LoginForm onLoginFormSubmit={LoginFormSubmitHandler} />
      )}
      {loginInfo.LoginStatus && <HomePage UserInfo = {loginInfo}/>}
    </div>
  );
}

export default App;
