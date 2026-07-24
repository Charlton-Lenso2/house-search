function HouseCard({ house }) {
  return (
    <div className="rounded-lg overflow-hidden shadow bg-white">
      <img
        src={house.image}
        alt={house.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-800">{house.title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {house.bedrooms} bed &middot; {house.bathrooms} bath
        </p>
        <p className="text-lg font-semibold text-gray-900 mt-2">
          ${house.price}/mo
        </p>
        <span
          className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
            house.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {house.available ? "Available" : "Rented"}
        </span>
      </div>
    </div>
  );
}

export default HouseCard;
