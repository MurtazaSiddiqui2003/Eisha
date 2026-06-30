"use client";
import './collections.css'

// import mockCollection from '../sections/collections/collection'

const CollectionPage = () => {
  // Temporary data array for catalog items
  const mockCollection = [
    { id: 1, name: "2-Piece-Suits", img: "https://i.pinimg.com/1200x/93/c2/ff/93c2fff7f0cad64d25856c2f577f2cf5.jpg" },
    { id: 2, name: "3-Piece-Suits", img: "https://i.pinimg.com/736x/86/fa/53/86fa53ef2ada3d72dc932a3cc972ab66.jpg" },
    { id: 3, name: "Saree", img: "https://i.pinimg.com/1200x/11/91/be/1191be877ceb3e7e6ae566a731a90656.jpg" },
    { id: 4, name: "Lehnga", img: "https://i.pinimg.com/1200x/e6/20/72/e620729108c072fddbcae017f23ff4bc.jpg" },
  ];

  return (
    <div className="catalogContainer">
      <div className="catalogHeader">
        <h1 className="catalogTitle">All Collections</h1>
        <p className="catalogSubtitle">
          Browse our collection of raw luxury apparel blanks and customizable canvas bases.
        </p>
      </div>

      {/* Grid container mapping cards using modular styles */}
      <div className="collectionGrid">
        {mockCollection.map((collection) => (
          <a
            href={`/collections/${collection.name}`}
            key={collection.id}
            className="collectionCard"
          >
            <div
              className="imageBox"
              style={{ backgroundImage: `url(${collection.img})` }}
            />
            <h3 className="metaTitle">{collection.name}</h3>
            <p className="metaPrice">{collection.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage