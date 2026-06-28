import './collecton.css'

const CollectionSection = () => {

    const mockCollection = [
        { id: 1, name: "Premium Blanks", bg: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500" },
        { id: 2, name: "Custom Hoodies", bg: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
        { id: 3, name: "Print-on-Demand", bg: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=500" },
        { id: 4, name: "Embroidery Services", bg: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=500" },
    ]

    return(
        <section className="collection-section">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <a href="/collections" className="section-link">See All Categories</a>
        </div>
        <div className="collections-slider">
          {mockCollection.map((col) => (
            <a 
              href={`/collections`} 
              key={col.id} 
              className="collection-card"
              style={{ backgroundImage: `url(${col.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="collection-overlay" />
              <span className="collection-name">{col.name}</span>
            </a>
          ))}
        </div>
      </section>
    )
}

export default CollectionSection