
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import PgList from "./pages/pglist";
import PgDetail from "./pages/pgdetail";
import About from "./pages/about";
import FAQ from "./pages/FAQ";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<PgList />} />
            <Route path="/listings/:id" element={<PgDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;