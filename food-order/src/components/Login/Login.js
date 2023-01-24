import React, { useRef } from 'react';

const Login = (props) => {
    const usrName = useRef();
    const usrPass = useRef();
    const LoginFormHandler = e => {
        e.preventDefault();
        const LoginDetails = {
            usrName : usrName.current.value,
            usrPass : usrPass.current.value,
            status : true
        }
        props.userFormSubmit(LoginDetails)
    }
    return (
        <div>
            <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-12 mx-auto tm-login-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <form action="index.html" method="post" className="tm-login-form" onSubmit={LoginFormHandler}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      className="form-control validate"
                      id="username"
                      required
                      ref={usrName}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control validate"
                      id="password"
                      required
                      ref={usrPass}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Login
                    </button>
                  </div>
                  <button className="mt-5 btn btn-primary btn-block text-uppercase">
                    Forgot your password?
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;