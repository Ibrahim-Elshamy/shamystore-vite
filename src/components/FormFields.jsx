import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {AuthFormContext} from "./context/AuthFormContext";

function FormFields({ type }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, registerUser, contactUs } = useContext(AuthFormContext);

  const submitForm = (data) => {
    if (type === "login") login(data);
    else if (type === "register") registerUser(data);
    else contactUs(data);
  };

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        {/* NameInput */}
        {(type === "register" || type === "contactUs") && (
          <div className="nameInput">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                autoComplete="off"
                {...register("firstName", {
                  required: "First name is required",
                  maxLength: 20,
                })}
              />
              {errors.firstName && (
                <p role="alert">{errors.firstName.message}</p>
              )}
            </div>
            <div className="secondName">
              <label htmlFor="secondName">Second Name</label>
              <input
                type="text"
                autoComplete="off"
                {...register("secondName", {
                  required: "Second name is required",
                  maxLength: 20,
                })}
              />
              {errors.secondName && (
                <p role="alert">{errors.secondName.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="off"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}

        {/* password */}
        {(type === "login" || type === "register") && (
          <>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Enter your Password Please",
              })}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
          </>
        )}

        {/* Confirm password */}
        {type === "register" && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Enter your Confirm Password Please",
              })}
            />
            {errors.confirmPassword && (
              <p role="alert">{errors.confirmPassword.message}</p>
            )}
          </>
        )}

        {/* contactUS */}
        {type === "contactUs" && (
          <>
            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              cols="50"
              {...register("message", {
                required: "Enter your Message Please",
              })}
            />
            {errors.message && <p role="alert">{errors.message.message}</p>}
          </>
        )}
        {/* button */}
        <button type="submit" className="submitBtn">
          {type === "login"
            ? "LOGIN"
            : type === "register"
              ? "Create Account"
              : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default FormFields;
