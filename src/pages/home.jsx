import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3 text-blue-700">Find verified, safe, and trusted PGs with Dormly</h1>
        <p className="mb-6 text-lg text-gray-600">Clean, curated listings. Hassle-free discovery. No spam. Only trust.</p>
        <Link to="/pgs" className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">Browse PGs</Link>
      </section>
      <section className="max-w-4xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-3xl mb-2">🔒</div>
          <h3 className="font-semibold mb-1">Verified Listings Only</h3>
          <p className="text-sm text-gray-600">Every PG is handpicked and verified by our team for your peace of mind.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">📷</div>
          <h3 className="font-semibold mb-1">Detailed Photos & Info</h3>
          <p className="text-sm text-gray-600">Know exactly what you’ll get — with real photos and comprehensive amenities.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-semibold mb-1">Quick Enquiry</h3>
          <p className="text-sm text-gray-600">Use our secure form for fast, direct contact. No spam calls or hidden charges.</p>
        </div>
      </section>
    </div>
  );
}