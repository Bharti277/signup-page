import Login from "./Login/Login"
import './App.css';
import { useState } from "react";
import Signup from "./Signup/Signup";
import FakeAPI from "./FakeAPI/FakeAPI";

function App() {
  const [isLogin, setIsLogin] = useState("login");
  const toggleForm = (formName) => {
    setIsLogin(formName)
  }
  return (
    <div className="App">
     {isLogin === "login" ? <Login toggleForm={toggleForm} /> :<Signup toggleForm={toggleForm} />}
     <FakeAPI />
    </div>
  );
}

export default App;