import React, { createContext, useState } from "react";
import MainPage from "./Components/HomePage/MainPage/MainPage";
import Login from "./Components/logins/Login";

function App() {
  const UserContext = createContext({
    userId: "",
    userPassword: "",
    loginStatus: false,
  });
  const [userDetails, setUserDetails] = useState({
    userId: "",
    userPassword: "",
    loginStatus: false,
  });

  const LoginFormSubmitHandler = (logindetails) => {
    const loginDetails = {
      userId: logindetails.userId,
      userPassword: logindetails.userPassword,
      loginStatus: logindetails.loginStatus,
    };

    setUserDetails(loginDetails);
  };

  return (
    <div className="App">
      <UserContext.Provider value={userDetails}>
        {!userDetails.loginStatus ? (
          <Login onLoginFormSubmit={LoginFormSubmitHandler} />
        ) : (
          <MainPage />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
