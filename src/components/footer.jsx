export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-12 py-3">
      <div className="max-w-7xl mx-auto text-sm flex flex-col sm:flex-row items-center justify-between px-4">
        <div>© {new Date().getFullYear()} Dormly. All rights reserved.</div>
        <div className="mt-2 sm:mt-0 space-x-3">
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}