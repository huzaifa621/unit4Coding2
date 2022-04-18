import "./Rentals.css";
import React from "react";

export const Rentals = () => {
  const [houses, setHouses] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8080/houses");
      let data = await res.json();
      setHouses(data);
    } catch(err) {
      console.log(err);
    }
  }
  React.useEffect(()=> {
    getData();
  },[])

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={()=> {
          let newHouses = houses.sort( function(a,b) { return a.id-b.id; })
          setHouses([...newHouses]);
        }} className="sortById">Sort by ID</button>
        <button onClick={()=> {
          let newHouses = houses.sort( function(a,b) { return a.rent-b.rent; })
          setHouses([...newHouses]);
        }} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={()=> {
          let newHouses = houses.sort( function(a,b) { return b.rent-a.rent; })
          setHouses([...newHouses]);
        }} className="sortByRentDesc">Rent High to low</button>
        <button onClick={()=> {
          let newHouses = houses.sort( function(a,b) { return a.areaCode-b.areaCode; })
          setHouses([...newHouses]);
        }} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={()=> {
          let newHouses = houses.sort( function(a,b) { return b.areaCode-a.areaCode; })
          setHouses([...newHouses]);
        }} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        value = {search}
        onChange={(e)=>{
          setSearch(e.target.value)
          let newHouses = houses.filter((el) => {
            return el.address===search;
          })
          if(newHouses.length!==0) {
            setHouses([...newHouses])
          }
          else {
            getData();
          }
        }}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.prefferedTenants}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
