import Login from "./Login/Login";
import "./App.css";
import { useState } from "react";
import Signup from "./Signup/Signup";
import Testing from "./Testing";
import Home from "./pages/home/Home";

function App() {
  const [isLogin, setIsLogin] = useState("login");
  const toggleForm = (formName) => {
    setIsLogin(formName);
  };
  return (
    <div className="App">
      {/* <Home /> */}
      {isLogin === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
      {/* <Testing /> */}
    </div>
  );
}

export default App;
