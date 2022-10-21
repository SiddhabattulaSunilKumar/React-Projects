import React, { useState } from "react";
import MainPage from "./Components/HomePage/MainPage/MainPage";
import Login from "./Components/logins/Login";
import { UserDetailsContext } from "./Store/UserDetails-context";

const userLoginDetails = {
  userdetails: {
    userId: "",
    userPassword: "",
    loginStatus: false,
  }
};

function App() {
  const [userInfo, setUserInfo] = useState(userLoginDetails);

  const LoginFormSubmitHandler = (logindetails) => {
    const loginDetails = {
      userdetails: {
        userId: logindetails.userId,
        userPassword: logindetails.userPassword,
        loginStatus: logindetails.loginStatus,
      },
    };
    setUserInfo(loginDetails);
  };

  return (
    <div className="App">
      <UserDetailsContext.Provider value={userInfo.userdetails}>
        {!userInfo.userdetails.loginStatus ? (
          <Login onLoginFormSubmit={LoginFormSubmitHandler} />
        ) : (
          <MainPage />
        )}
      </UserDetailsContext.Provider>
    </div>
  );
}

export default App;
