import React, { useState } from "react";
import "./Login.css";

function Login({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newDataEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setFormData([...formData, newDataEntry]);
      console.log("Hello World!", formData);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the both field");
    }
  };

  return (
    <div className="login_page">
      <div className="left__container">
        <div className="facebook">
          <h1>Facebook</h1>
        </div>
        <div className="fb__text">
          Facebook helps you connect and share with the people in your life.
        </div>
      </div>
      <div className="right__container">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            {/* <label htmlFor="email">Email</label> */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address or phone number"
              id="email"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="row">
            {/* <label htmlFor="password">Password</label> */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn">
            Log in
          </button>
        </form>
        <p className="forgotten__password">Forgotten password?</p>
        <hr />
        <button
          onClick={() => toggleForm("signup")}
          className="signup__account"
        >
          Create new account
        </button>
        <div className="data_display">
          {formData.map((data) => {
            return (
              <div className="form_data" key={data.id}>
                <h2>{data.email}</h2>
                <h2>{data.password}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Login;
