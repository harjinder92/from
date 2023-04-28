import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return false;
    }
    navigate("/education");
  };

  return (
    <div>
      <form onSubmit={handle}>
        <h1>Contact</h1>
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        ></input>
        {error && !firstName && <span>required*</span>}
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        {error && !lastName && <span>required*</span>}
        <label htmlFor="">Email:</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {error && !email && <span>enter valid email address</span>}
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error && !password && <span>required*</span>}
        <label htmlFor="">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        ></input>
        {error && !confirmPassword && <span>password doesn't match</span>}
        <button onClick={handle}>Next</button>
      </form>
    </div>
  );
}
export default Contact;
