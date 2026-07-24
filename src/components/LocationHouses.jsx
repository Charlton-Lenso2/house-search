import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HouseCard from "./HouseCard";
import dbData from "../../db.json";

function LocationHouses() {
  const { id } = useParams();
  const [houses, setHouses] = useState([]);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    const matchingHouses = dbData.houses.filter(
      (house) => house.locationId === id,
    );
    const matchingLocation = dbData.locations.find(
      (location) => location.id === id,
    );

    setHouses(matchingHouses);
    setLocationName(matchingLocation?.name || "");
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to locations
      </Link>
      <h2 className="text-xl font-semibold mb-4">Houses in {locationName}</h2>

      {houses.length === 0 ? (
        <p className="text-gray-500">No houses available in this location.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationHouses;
