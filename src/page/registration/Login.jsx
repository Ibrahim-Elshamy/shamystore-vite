import React from "react";
import { Link } from "react-router-dom";
import FormFields from "../../components/FormFields";
import { FaUser } from "react-icons/fa";
import './registration.css'
import PageTransition from "../../components/PageTransition";

function Login() {
  return (
    <PageTransition>
      <div className="login registeration container">
        <div className="parent">
          <div className="loginIcon">
            <FaUser />
          </div>
          <h1 className="logTitle">LOGIN</h1>
          <div className="content">
            <FormFields type="login" />
            <p className="accountQuestion">
              Don’t have an account?
              <Link to="/register" className="regHere">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Login;
