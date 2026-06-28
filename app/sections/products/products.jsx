import './products.css'
const ProductSection = () => { 
    const mockFeaturedProducts = [
    { id: "p1", name: "Heavyweight Core Tee", price: "$29.00", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500" },
    { id: "p2", name: "Luxury Oversized Hoodie", price: "$65.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
    { id: "p3", name: "Classic French Terry Crewneck", price: "$48.00", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500" },
    { id: "p4", name: "Custom DTF Workwear Jacket", price: "$89.00", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500" },
  ];

  return(
    <section>
        <div className="section-header">
          <h2 className="section-title">Trending Releases</h2>
          <a href="/products" className="section-link">View Full Catalog</a>
        </div>
        <div className="product-grid">
          {mockFeaturedProducts.map((prod) => (
            <a href={`/products/${prod.id}`} key={prod.id} className="product-card">
              <div 
                className="product-image-box" 
                style={{ backgroundImage: `url(${prod.img})` }}
              />
              <h3 className="product-meta-title">{prod.name}</h3>
              <p className="product-meta-price">{prod.price}</p>
            </a>
          ))}
        </div>
      </section>
  )
}

export default ProductSection