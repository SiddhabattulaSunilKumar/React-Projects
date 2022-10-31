import { useState } from "react";
import useLocalStorage from "../../Store/Browser-Store/useLocalStorega";
import "./login.module.css";

const Login = (props) => {
    const[usrName,setUsrName]=useState('');
    const[usrPassword,setUsrPassword]=useState('');

    const UserNameChangeHandler = e =>{
        setUsrName(e.target.value)
    }

    const UserPasswordChangerHandler= e =>{
        setUsrPassword(e.target.value)
    }

    const LoginFormSubmitHandler = e=> {
        e.preventDefault();
        if(usrName.trim().length!='' && usrPassword.trim().length!=''){
            console.log(usrName+" -- "+usrPassword)
            const userStatus = {
                usrName : usrName,
                userPassword : usrPassword,
                status : "Success"
            }
            props.onLoginSubmit(userStatus);
            setUsrName('');
            setUsrPassword('');
        }
        else{
            alert('email or password wrong')
        }
console.log(usrName+" -- "+usrPassword)
    }

  return (
    <div>
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" onSubmit={LoginFormSubmitHandler}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={UserNameChangeHandler}
                      value={usrName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={UserPasswordChangerHandler}
                      value={usrPassword}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="/#" className="text-info">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
