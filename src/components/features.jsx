jsx
import React from 'react';
import { FaShieldAlt, FaCalendarCheck, FaHeadset } from 'react-icons/fa'; // Example icons

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
      title: 'Verified Listings',
      description: 'All our PG listings are thoroughly verified to ensure safety and authenticity.',
    },
    {
      icon: <FaCalendarCheck className="text-blue-600 text-4xl mb-4" />,
      title: 'Easy Booking',
      description: 'Book your ideal PG in just a few simple steps with our user-friendly platform.',
    },
    {
      icon: <FaHeadset className="text-blue-600 text-4xl mb-4" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dormly?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;