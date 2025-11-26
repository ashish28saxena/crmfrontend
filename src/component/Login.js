import React ,{ useState } from "react";
const Login=()=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

  

  const handleRegister = async (e) => {
      
      console.log(email)
      console.log(password)
      
      e.preventDefault();

    const payload = {
      email: email,
      password:password,
      
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST", // POST method
        headers: {
          "Content-Type": "application/json", // sending JSON data
        },
        body: JSON.stringify(payload), // convert JS object to JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // parse JSON response
      alert(`User created with ID: ${data}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
    return(
        <div>
            <h1>Login</h1>
            <form >
  
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
          onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleRegister}>Login</button>
</form>
        </div>
    )
}

export default Login;