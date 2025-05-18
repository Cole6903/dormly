// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Find your perfect PG with <span className="text-yellow-300">Dormly</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-10 text-center drop-shadow-md">
        Verified listings, easy booking, comfortable stays — all in one place.
      </p>

      <div className="w-full max-w-xl flex gap-4">
        <input
          type="text"
          placeholder="Enter city or area"
          className="flex-grow p-4 rounded-lg border-0 focus:outline-none text-black"
        />
        <button className="bg-yellow-300 text-purple-900 font-semibold px-6 rounded-lg hover:bg-yellow-400 transition">
          Search
        </button>
      </div>
    </section>
  );
}
