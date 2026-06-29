"use client";
import './products.css'

const ProductsPage = () => {
  // Temporary data array for catalog items
  const mockAllProducts = [
    { id: "p1", name: "E2-001", price: "$29.00", img: "https://i.pinimg.com/736x/f7/b5/4a/f7b54ac80ad7812b34b90c3d0f227c09.jpg" },
    { id: "p2", name: "E3-054", price: "$65.00", img: "https://i.pinimg.com/736x/33/5f/98/335f987712c0a02e277ad02ce1536cca.jpg" },
    { id: "p3", name: "ES-004", price: "$48.00", img: "https://i.pinimg.com/736x/97/c1/54/97c154119f4563861e9067d8cd08d637.jpg" },
    { id: "p4", name: "EL-035", price: "$89.00", img: "https://i.pinimg.com/736x/6d/e5/cc/6de5cc4189fe747caf09eaabf5aa0a13.jpg" },
    { id: "p5", name: "E3-021", price: "$24.00", img: "https://i.pinimg.com/736x/f6/3b/c5/f63bc520c22b165af8120bf8cba20f3c.jpg" },
    { id: "p6", name: "E2-019", price: "$35.00", img: "https://i.pinimg.com/736x/c1/8e/69/c18e69c32510f6449431a1fcb0a6f09b.jpg" },
  ];

  return (
    <div className="catalogContainer">
      <div className="catalogHeader">
        <h1 className="catalogTitle">All Products</h1>
        <p className="catalogSubtitle">
          Browse our collection of raw luxury apparel blanks and customizable canvas bases.
        </p>
      </div>

      {/* Grid container mapping cards using modular styles */}
      <div className="productGrid">
        {mockAllProducts.map((product) => (
          <a 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="productCard"
          >
            <div 
              className="imageBox" 
              style={{ backgroundImage: `url(${product.img})` }}
            />
            <h3 className="metaTitle">{product.name}</h3>
            <p className="metaPrice">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage
