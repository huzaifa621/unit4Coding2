import "./App.css";
import React from "react";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [toggle, setToggle] = React.useState(false)
  return (
    <div className="App">
      <button onClick={()=>setToggle(!toggle)} className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        {toggle?"show houses table":"add new house"}
      </button>
      {/* Show component based on state */}
      {toggle?<AddHouse />:<Rentals />}
      <br />
    </div>
  );
}

export default App;
