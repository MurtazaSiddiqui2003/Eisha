import './collecton.css'

const CollectionSection = () => {

    const mockCollection = [
        { id: 1, name: "2 Piece Suits", bg: "https://i.pinimg.com/1200x/93/c2/ff/93c2fff7f0cad64d25856c2f577f2cf5.jpg" },
        { id: 2, name: "3 Piece Suits", bg: "https://i.pinimg.com/736x/86/fa/53/86fa53ef2ada3d72dc932a3cc972ab66.jpg" },
        { id: 3, name: "Saree", bg: "https://i.pinimg.com/1200x/11/91/be/1191be877ceb3e7e6ae566a731a90656.jpg" },
        { id: 4, name: "Lehnga", bg: "https://i.pinimg.com/1200x/e6/20/72/e620729108c072fddbcae017f23ff4bc.jpg" },
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
