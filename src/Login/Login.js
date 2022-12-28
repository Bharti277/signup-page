import React, { useState } from "react";

function Login({toggleForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World!", email);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="abc@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button>Login</button>
      </form>
      <button onClick={() => toggleForm("signup")}>Don't have account? Register here</button>
    </div>
  );
}

export default Login;
