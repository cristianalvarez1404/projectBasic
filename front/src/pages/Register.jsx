import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="Login">
          <form action="">
            <h1>Logging your account</h1>
            <div className="formInput">
              <label htmlFor="">User name</label>
              <input type="text" required />
            </div>
            <div className="formInput">
              <label htmlFor="">Email Address</label>
              <input type="text" required />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password" required />
            </div>
            <div className="formInput">
              <label htmlFor="">Phone Number</label>
              <input type="tel" required />
            </div>
            <div className="formInput">
              <label htmlFor="">Address</label>
              <input type="tel" required />
            </div>
            <div className="formQuestions">
              <div className="question">
                <Link to={"/login"}>
                  <p>Login</p>
                </Link>
              </div>
              <div className="question">
                <Link to={"/login"}>
                  <p>you already have an account?</p>
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

export default Register;
