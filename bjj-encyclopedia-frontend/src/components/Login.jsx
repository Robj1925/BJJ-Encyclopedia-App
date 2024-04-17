import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8081/login", {
        username: username,
        password: password,
      }).then((res) => {
        console.log(res.data);
        alert(res.data.message);
        if (res.data.message === "Login Successful!") {
          navigate('/todo');
        } else {
          // Handle other cases if needed
        }
        //  if (res.data.message == "Email not exits") 
        //  {
        //    alert("Email not exits");
        //  } 
        //  else if(res.data.message == "Login Successful!")
        //  { 

        //     navigate('/home');
        //  } 
        //   else 
        //  { 
        //     alert("Incorrect Email and Password not match");
        //  }
      }, fail => {
        console.error(fail.response.data); // Error!
      });
    }


    catch (err) {
      alert(err.response.data);
    }

  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <h2>Login- exclusive for Rob J</h2>
          <hr />
        </div>

        <div class="row">
          <div class="col-sm-6">

            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="username" class="form-control" id="username" placeholder="Enter Username"

                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}

                />

              </div>

              <div class="form-group">
                <label>password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password"

                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
              </div>
              <button type="submit" class="btn btn-primary" onClick={login} >Login</button>&nbsp;&nbsp;
              <button class="btn btn-primary" onClick={() => navigate("/register")}> Register </button>

            </form>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;