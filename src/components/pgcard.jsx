import { Link } from "react-router-dom";
export default function PGCard({pg}) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col">
      <img src={pg.photos[0]} alt={pg.name} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold">{pg.name}</h2>
        <div className="mb-2 text-gray-600">{pg.locality}, {pg.city}</div>
        <div className="mb-1">₹{pg.price}/mo</div>
        <div className="flex space-x-2 text-xs mb-2">
          {pg.amenities.slice(0,3).map(amenity => (
            <div key={amenity} className="bg-blue-100 text-blue-700 rounded px-2 py-0.5">{amenity}</div>
          ))}
        </div>
        <Link className="mt-auto inline-block text-blue-700 hover:underline" to={`/pg/$
{pg._id}`}>View Details</Link>
      </div>
    </div>
  );
}