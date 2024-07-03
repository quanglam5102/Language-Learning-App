import React, { useState } from "react";
import '../../static/css/Registration.css'

export default function Registration() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleSubmit = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (
      nickname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage("Please enter all required fields.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Confirm password must match.");
    } 
    else if(!regex.test(email)) {
        setErrorMessage("Please enter a valid email address.")
    }
    else {
      setSuccessMessage(
        "Thank you " + nickname + ". You have been registered successfully."
      );
      setErrorMessage("");
    }
  };

  return (
    <div className="App">
      <div className="register-page">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Registration</h2>
          {errorMessage !== "" && (
            <div style={{ color: "red" }}>{errorMessage}</div>
          )}
          {successMessage !== "" && (
            <div style={{ color: "green" }}>{successMessage}</div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confrimPassword">Password Confirmation:</label>
            <input
              type="password"
              id="confrimPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button style={{marginTop: '5px'}} onClick={handleSubmit} className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
