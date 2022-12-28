import React, { useState } from "react";

function Login({toggleForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDataEntry = {email:email, password:password};
    setFormData([...formData, newDataEntry])
    console.log("Hello World!", formData);
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
      <div className="data_display">
        {formData.map((data) => {
          return (
            <div className="form_data">
              {data.email}, {data.password}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Login;
