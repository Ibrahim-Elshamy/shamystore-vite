import React from "react";
import { Link } from "react-router-dom";
import FormFields from "../../components/FormFields";
import PageTransition from "../../components/PageTransition";
import "./registration.css";

function Register() {
  return (
    <PageTransition>
      <div className="register registeration container">
        <div className="parent">
          <h1 className="regTitle">SIGN UP</h1>
          <div className="content">
            <FormFields type="register" />
            <p className="accountQuestion">
              Already have an account?{" "}
              <Link to="/login" className="regHere">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Register;
