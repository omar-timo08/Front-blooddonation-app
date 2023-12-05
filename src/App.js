import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Contactus } from "./Contactus";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
            <div class="navbar">
            <img src="./sang.png" ></img>
         <a href="#"><i class="fa fa-fw fa-search"></i> about us</a>
         <a href="#"onClick={() => toggleForm('Contactus')}><i class="fa fa-fw fa-envelope"></i> Contact</a>
         <a href="#" onClick={() => toggleForm('register')}><i class="fa fa-fw fa-user"></i> sign up</a>
            </div>
    <div className="App">
       {currentForm === "login" && <Login onFormSwitch={() => toggleForm('register')} />}
      {currentForm === "register" && <Register onFormSwitch={() => toggleForm('login')} />}
      {currentForm === "Contactus" && <Contactus />}
    </div>
    </div>
  );
}

export default App;