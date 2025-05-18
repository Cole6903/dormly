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
          <h2 className="text-2xl font-bold mb-2">{pg.name}</h2>
          <div className="mb-2 text-gray-500">{pg.locality}, {pg.city}</div>
          <div className="mb-2 font-semibold">₹{pg.price}/month</div>
          <div className="mb-3">
            <span className="font-semibold">Amenities:</span>
            <ul className="list-disc ml-5 text-sm">
              {pg.amenities.map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div className="mb-3"><span className="font-semibold">Description:</span> {pg.description}</div>
          <a href={pg.mapLink} target="_blank" rel="noreferrer" className="text-blue-600 underline">View on Map</a>
          <div className="my-4">
            <h3 className="font-bold mb-2">Enquire Now</h3>
            <EnquiryForm pgId={pg._id} />
          </div>
        </div>
      </div>
    </div>
  );
}