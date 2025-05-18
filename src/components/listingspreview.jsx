jsx
import React from 'react';

const sampleListings = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    name: 'Sunshine PG',
    location: 'Indiranagar, Bangalore',
    price: '₹ 8000/month',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    name: 'Cozy Corner',
    location: 'Koramangala, Bangalore',
    price: '₹ 9500/month',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    name: 'Urban Living',
    location: 'BTM Layout, Bangalore',
    price: '₹ 7000/month',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x200',
    name: 'Student Haven',
    location: 'Electronic City, Bangalore',
    price: '₹ 6500/month',
  },
];

const ListingsPreview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{listing.name}</h3>
                <p className="text-gray-600 mb-2">{listing.location}</p>
                <p className="text-blue-600 font-bold mb-4">{listing.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsPreview;