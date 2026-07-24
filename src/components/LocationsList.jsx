import { Link } from "react-router-dom";
import dbData from "../../db.json";

function LocationsList() {
  const locations = dbData.locations;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Choose a Location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <Link
            key={loc.id}
            to={`/locations/${loc.id}`}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">{loc.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LocationsList;
