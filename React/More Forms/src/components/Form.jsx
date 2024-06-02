import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateFirstName = () => {
    if (firstName.trim().length < 2 && firstName.trim().length > 0) {
      setFirstNameError("First Name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (lastName.trim().length < 2 && lastName.trim().length > 0) {
      setLastNameError("Last Name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const validateEmail = () => {
    if (email.trim().length < 5 && email.trim().length > 0) {
      setEmailError("Email must be at least 5 characters.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.trim().length < 8 && password.trim().length > 0) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password && confirmPassword.trim().length > 0) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  };

  return (
    <div className="container mt-5">
      <form onSubmit={createUser}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setFirstNameError("");
            }}
          />
          {firstNameError && <p className="error">{firstNameError}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setLastNameError("");
            }}
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
            }}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h2>Form Data</h2>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
        <p><strong>Confirm Password:</strong> {confirmPassword}</p>
      </div>
    </div>
  );
};

export default Form;
