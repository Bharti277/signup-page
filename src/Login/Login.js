import React, { useState } from "react";
import "./Login.css";

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
    <div className="login_page">
      <form action="" onSubmit={handleSubmit}>
       <div className="row">
       <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="abc@gmail.com"
          id="email"
          name="email"
        />
       </div>
      <div className="row">
      <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => toggleForm("signup")}>Don't have account? Register here</button>
      <div className="data_display">
        {formData.map((data) => {
          return (
            <div className="form_data">
              <h2>{data.email}</h2>
              <h2>{data.password}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Login;
