import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link className="text-xl font-bold text-blue-700" to="/">Dormly</Link>
        <div className="space-x-4">
          <NavLink to="/pgs" className={({isActive}) => isActive ? "font-semibold text-blue-700" : ""}>Browse</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "font-semibold text-blue-700" : ""}>About</NavLink>
          <NavLink to="/faq" className={({isActive}) => isActive ? "font-semibold text-blue-700" : ""}>FAQ</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "font-semibold text-blue-700" : ""}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}