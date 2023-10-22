import React, { useState } from "react";
import axios from "axios";
import VehicleList from "./VehicleList";

const SearchButton = ({ pointA, pointB, date }) => {
  const [vehicles, setVehicles] = useState([]);

  const handleSearch = () => {
    // Replace this URL with your API endpoint to fetch available vehicles
    const apiUrl = `https://your-api-url/vehicles?pointA=${pointA}&pointB=${pointB}&date=${date}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <button onClick={handleSearch}>Search</button>
      {vehicles.length > 0 && <VehicleList vehicles={vehicles} />}
    </div>
  );
};

export default SearchButton;
