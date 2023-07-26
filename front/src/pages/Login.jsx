import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="Login">
          <form action="">
            <h1>Logging your account</h1>
            <div className="formInput">
              <label htmlFor="">Email Address</label>
              <input type="text" required />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password" required />
            </div>
            <div className="formQuestions">
              <div className="question">
                <Link to={"/register"}>
                  <p>Register</p>
                </Link>
              </div>
              <div className="question">
                <Link>
                  <p>Forgot your password?</p>
                </Link>
              </div>
            </div>
            <button className="formSubmit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
