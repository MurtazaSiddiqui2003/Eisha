import './products.css'
const ProductSection = () => { 
    const mockFeaturedProducts = [
    { id: "p1", name: "E2-001", price: "$29.00", img: "https://i.pinimg.com/736x/f7/b5/4a/f7b54ac80ad7812b34b90c3d0f227c09.jpg" },
    { id: "p2", name: "E3-054", price: "$65.00", img: "https://i.pinimg.com/736x/33/5f/98/335f987712c0a02e277ad02ce1536cca.jpg" },
    { id: "p3", name: "ES-004", price: "$48.00", img: "https://i.pinimg.com/736x/97/c1/54/97c154119f4563861e9067d8cd08d637.jpg" },
    { id: "p4", name: "EL-035", price: "$89.00", img: "https://i.pinimg.com/736x/6d/e5/cc/6de5cc4189fe747caf09eaabf5aa0a13.jpg" },
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
