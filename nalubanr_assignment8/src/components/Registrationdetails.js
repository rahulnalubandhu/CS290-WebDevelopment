import React, { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form>
        <fieldset>
          <legend>Your Details</legend>
          <label className="form-label">
            Enter Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label className="form-label">
            Enter Your Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </fieldset>
        <br></br>
        <button
          className="submit-button"
          onClick={(e) => {
            setName(e.target.value);
            setEmail(e.target.value);
            alert(
              `Thank you for registering, ${name}! We will send promotions to ${email}.`
            );
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
