import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Login.scss";
import { Redirect ,useHistory } from "react-router-dom";

export default function LoginUser() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user,setUser]=useState(
      {
          email:'',
          password:'',
          domain:''
      }
  )
  const history=useHistory()
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
  
    history.push("/")
  };
  function handleChange(event){
    let tmpuser=user
    tmpuser[event.target.id]=event.target.value
    setUser(tmpuser)
    console.log(tmpuser)
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
  
        <div className="input-container">
          <label>Username </label>
          <input type="text" id='email' onChange={handleChange} name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id='password' onChange={handleChange} name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="button" onClick={()=>history.push("/")} />
        </div>
    
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");