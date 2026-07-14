// Sections
import Hero from './sections/hero/hero'
import CollectionSection from './sections/collections/collection';
import ProductSection from './sections/products/products';
import ServiceSection from './sections/services/service';

// CSS
import './home.css'
const Home = () => {
  

  const mockFeaturedProducts = [
    { id: "p1", name: "Heavyweight Core Tee", price: "$29.00", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500" },
    { id: "p2", name: "Luxury Oversized Hoodie", price: "$65.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
    { id: "p3", name: "Classic French Terry Crewneck", price: "$48.00", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500" },
    { id: "p4", name: "Custom DTF Workwear Jacket", price: "$89.00", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500" },
  ];

  return (
    <div className="homepage">
      <Hero style={{ width: "100vw"}}/>
      <CollectionSection />
      <ProductSection />
      <ServiceSection />
    </div>
  )
}

export default Home
