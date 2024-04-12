import React from 'react'
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function Register() {
  
   // const [employeename, setEmployeename] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/register", {
     //     employeename: employeename,
          username: username,
          password: password,
          })
          .then((res) => 
          {
           console.log(res.data);
           alert(res.data.message);
           if (res.data.message === "Succesfully Registered!") {
            navigate("/")
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
        }  catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>User Registation</h1>
    
    <form>
        {/* <div class="form-group">
          <label>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />

        </div> */}

        <div class="form-group">
          <label>Username</label>
          <input type="Username"  class="form-control" id="username" placeholder="Enter Username"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="Password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;