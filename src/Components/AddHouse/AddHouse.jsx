import React from "react";
import styles from "./AddHouse.css";

export const AddHouse = () => {
  const [form, setForm] = React.useState({})
  
  const handleChange = (e) => {
    let inpVal = e.target.name;
    if(e.target.type==="checked") {
      setForm({...form,[inpVal]:e.target.label})
    }
    else {
      setForm({...form,[inpVal]:e.target.value})
    }
    console.log(form)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:8080/houses", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(form)
    })
    
  }
  return (
    <div className="addHouseContainer">
      <form style={{padding:"10px", border: "1px solid lightgray", maxWidth: "content-fit"}} onSubmit={handleSubmit}>
        <label style = {{width:"100px"}}>name</label>
        <input type="text" name="name" style = {{margin: "15px"}} onChange={handleChange} />
        <br />
        <label style = {{width:"100px"}}>ownerName</label>
        <input name="ownerName" type="text" className="ownerName" style = {{margin: "15px"}} onChange={handleChange} required />
        <br />
        <label style = {{width:"100px"}}>address</label>
        <input name="address" type="text" className="address" style = {{margin: "15px"}} onChange={handleChange} required />
        <br />
        <label style = {{width:"100px"}}>areaCode</label>
        <input name="areaCode" type="text" className="areaCode" style = {{margin: "15px"}} onChange={handleChange} required />
        <br />
        <label style = {{width:"100px"}}>rent</label>
        <input name="rent" type="text" className="rent" style = {{margin: "15px"}} onChange={handleChange} required />
        <br />
        <label style = {{width:"100px"}}>preferredTenant</label>
        <br />
        <label style = {{width:"100px"}}>bachelor</label>
        <input value={"bachelor"} name="prefferedTenants" type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label style = {{width:"100px"}}>married</label>
        <input value={"married"} name="prefferedTenants" type="checkbox" className="married" onChange={handleChange} />
        <br />
        <label style = {{width:"100px"}}>image</label>
        <input type="text" className="image" style = {{margin: "15px"}} onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
