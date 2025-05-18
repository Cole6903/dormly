// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center text-white px-6 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Find your perfect PG with <span className="text-yellow-300">Dormly</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-10 text-center drop-shadow-md">
        Verified listings, easy booking, comfortable stays — all in one place.
      </p>
      <button className="bg-yellow-300 text-purple-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition text-xl">
          Find PG Now
        </button>
      </div>
    </section>
  );
}
