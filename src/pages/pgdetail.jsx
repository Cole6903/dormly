import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EnquiryForm from "../components/enquiryform";

export default function PgDetails() {
  const { id } = useParams();
  const [pg, setPg] = useState(null);

  useEffect(() => {
    fetch(`/api/pgs/$
{id}`).then(res => res.json()).then(setPg);
  }, [id]);

  if (!pg) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={pg.photos[0]} alt={pg.name} className="w-full h-64 object-cover rounded" />
          <div className="grid grid-cols-4 gap-2 mt-2">
            {pg.photos.slice(1).map((url, i) => (
              <img key={i} src={url} alt={`pic
${i}`} className="h-20 w-full object-cover rounded"/>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{pg.name}</h2>
          <div className="text-gray-600 mb-4">{pg.locality}, {pg.city}</div>

          {/* Price Section */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="text-xl font-semibold mb-2">Starting from:</div>
            <div className="text-3xl font-bold text-green-700">₹{pg.price}/month</div>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Description:</h3>
            <p className="text-gray-700">{pg.description}</p>
          </div>

          {/* Amenities Section */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Amenities:</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              {pg.amenities.map(a => <li key={a} className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>{a}</li>)}
            </ul>
          </div>

          {/* Location Section */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Location:</h3>
            <p className="text-gray-700 mb-2">{pg.locality}, {pg.city}</p>
            <a href={pg.mapLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Map</a>
          </div>

          {/* Enquiry Form Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Enquire Now</h3>
            <EnquiryForm pgId={pg._id} />
          </div>
        </div>
      </div>
    </div>
  );
}