import React ,{ useState } from "react";
const Lead=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [company,setCompany]=useState("");
    const [status,setStatus]=useState("");
    

  

  const handleRegister = async (e) => {
      
       e.preventDefault();

    const payload = {
      name: name,
      email: email,
      phone:phone,
      company:company,
      status:status
    };

    try {
      const response = await fetch("http://localhost:5000/api/lead/addlead", {
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
            <h1>Add Lead</h1>
            <form >
  
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter email" 
          onChange={(e)=>setName(e.target.value)}/>
    
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email</label> 
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
          onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Phone" 
          onChange={(e)=>setPhone(e.target.value)}/>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Company</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Company" 
          onChange={(e)=>setCompany(e.target.value)}/>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Status</label>
    <select
            name="status"
            
            onChange={(e)=>setStatus(e.target.value)}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Lost">Lost</option>
          </select>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleRegister}>Add Lead</button>
</form>
        </div>
    )
}

export default Lead;