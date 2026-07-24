import { Routes, Route } from "react-router-dom";
import LocationsList from "./components/LocationsList";
import LocationHouses from "./components/LocationHouses";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">House Search</h1>
      </header>
      <Routes>
        <Route path="/" element={<LocationsList />} />
        <Route path="/locations/:id" element={<LocationHouses />} />
      </Routes>
    </div>
  );
}

export default App;
