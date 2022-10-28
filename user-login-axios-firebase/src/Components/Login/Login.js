import { useEffect, useState } from "react";
import LoginTemplate from "../../Templates/LoginTemplate";
import RegisterTemplate from "../../Templates/RegisterTemplate";
import {ValidateRegistration} from './RegistrationValidation'
import {ValidateLogin} from "./LoginValidation"

let UserDetails = {
  emailId : '',
  password : '',
}

let LoginResponse = {};

const Login = (props) => {
  const [formVisibility, setFormVisibility] = useState();

  useEffect(()=>{
    setFormVisibility("LoginForm");
  },[])

  const userLoginSubmitHanlder = async (userLoginDetails) => {
    //console.log(userLoginDetails);
    const loginType = userLoginDetails.loginType.type;

    if (loginType === "LoginForm") {
      setFormVisibility("LoginForm");
      return;
    }
    if (loginType === "RegisterForm") {
      setFormVisibility("RegisterForm");
      return;
    }
    if (loginType === "NewUserRegister") {
      setFormVisibility("RegisterForm");
      const newUserDetails = {
        emailId : userLoginDetails.loginDetails.userEmailId,
        password : userLoginDetails.loginDetails.userPassword,
        name : userLoginDetails.loginDetails.userName,
      }
      const childoutput=ValidateRegistration(newUserDetails);
      console.log("response :"+childoutput);
      setFormVisibility("LoginForm");
      return;
    }
    if(loginType ==="ExsistingUserLogin"){
      setFormVisibility("LoginForm");
       UserDetails = {
        emailId : userLoginDetails.loginDetails.userEmailId,
        password : userLoginDetails.loginDetails.userPassword,
      }
      LoginResponse = await ValidateLogin(UserDetails);
      console.log(LoginResponse.Status)
        
     
    }
  };
  return (
    <>
    {formVisibility==="RegisterForm" && <RegisterTemplate onUserLoginSubmit={userLoginSubmitHanlder}/>}
      {formVisibility==="LoginForm" && <LoginTemplate onUserLoginSubmit={userLoginSubmitHanlder} />}
    </>
  );
};

export default Login;
