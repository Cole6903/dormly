import React, { useState, useEffect } from "react";
import PGCard from "../components/pgcard";

export default function PgList() {
  const [pgs, setPgs] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
 fetch(`/api/pgs${city ? "?city=" + city : ""}`)
      .then((res) => res.json())
      .then(setPgs);
  }, [city]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Browse Paying Guest (PG) Options</h1>
      <input
        className="border p-2 rounded mb-5 w-full max-w-xs"
        placeholder="Search by city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {pgs.length === 0 && <div className="text-gray-600">No listings found.</div>}
      <div className="grid md:grid-cols-3 gap-6">
        {pgs.map(pg => <PGCard key={pg._id} pg={pg} />)}
      </div>
    </div>
  );
}