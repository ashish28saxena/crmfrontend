import React ,{ useState } from "react";
const Adddoctor=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobileno,setMobileno]=useState("");

  const handleChange = (e) => {
    
  };

  const handleRegister = async (e) => {
      console.log(name)
      console.log(email)
      console.log(password)
      console.log(mobileno)
      e.preventDefault();

    const payload = {
      name: name,
      email: email,
      password:password,
      mobileno:mobileno
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
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
      alert(`User created with ID: ${data.id}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
    return(
        <div>
            <h1>Add Doctor</h1>
            <form >
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" 
          onChange={(e)=>setName(e.target.value)}/>
    
  </div>
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
  <div className="form-group">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="text" className="form-control" id="exampleInputmobile" placeholder="Mobile" 
          onChange={(e)=>setMobileno(e.target.value)}/>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleRegister}>Submit</button>
</form>
        </div>
    )
}

export default Adddoctor;