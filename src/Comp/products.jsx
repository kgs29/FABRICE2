import React, { useState } from 'react';
import '../assets/Css/products.css';
import Tech1 from '../assets/images/Tech1.jpg'

const ProductsSection = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Fonction pour ajouter au panier
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem
        ? prevCart.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1} 
              : item
          )
        : [...prevCart, {...product, quantity: 1}];
    });
  };

  // 50 produits multi-sectoriels
  const allProducts = [
    // Technologie
    {
      id: 1,
      name: 'Drone DJI Mavic 3 Pro avec caméra Hasselblad',
      price: 2199.99,
      originalPrice: 2499.99,
      category: 'Technologie',
     image: Tech1,
      rating: 4.8,
      reviews: 1243,
      features: ['4K/120fps', '46 min de vol', 'Triple caméra'],
      brand: 'DJI',
      stock: 15,
      shipping: 'Livraison gratuite',
      delivery: 'Livré demain'
    },
    // ... Ajouter 49 autres produits
  ];

  // Filtrer les produits par catégorie
  const filteredProducts = activeCategory === 'Tous' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <section className="ecommerce-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {activeCategory === 'Tous' ? 'Nos produits populaires' : `Produits ${activeCategory}`}
          </h2>
          <a href="#" className="see-all">Voir tout</a>
        </div>
        
        {/* Navigation par catégories */}
        <div className="category-scroller">
          <div className="category-nav">
            {['Tous', 'Technologie', 'Santé', 'BTP', 'Médical', 'Agricole', 'Industriel'].map(cat => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de produits */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              {/* Badge de promotion */}
              {product.originalPrice && (
                <div className="discount-badge">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
              )}
              
              {/* Image du produit */}
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = Tech1;
                    e.target.className = 'product-image placeholder';
                  }}
                />
              </div>

              {/* Détails du produit */}
              <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-title">{product.name}</h3>
                
                {/* Notation et avis */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'filled' : ''}>
                        {i < product.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="review-count">{product.reviews.toLocaleString()}</span>
                </div>
                
                {/* Prix */}
                <div className="price-container">
                  <span className="current-price">
                    {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                  </span>
                  {product.originalPrice && (
                    <span className="original-price">
                      {product.originalPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </span>
                  )}
                </div>
                
                {/* Livraison */}
                <div className="delivery-info">
                  <span className="delivery-icon">🚚</span>
                  <span>{product.shipping} · {product.delivery}</span>
                </div>
                
                {/* Bouton d'ajout au panier */}
                <button
                  className={`add-to-cart ${product.stock <= 0 ? 'out-of-stock' : ''}`}
                  onClick={() => product.stock > 0 && addToCart(product)}
                  disabled={product.stock <= 0}
                >
                  {product.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;