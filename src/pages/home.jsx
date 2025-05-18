import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';
import ListingsPreview from '../components/listingspreview';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ListingsPreview />
      <Footer />
    </div>
  );
}