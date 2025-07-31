import React from 'react';
import '../assets/css/supplier.css';

const SupplierCard = ({ supplier }) => {
  return (
    <div className={`supplier-card ${supplier.isRecommended ? 'ai-recommended' : ''}`}>
      {supplier.badge && <div className="supplier-badge">{supplier.badge}</div>}
      <img 
        src={supplier.image} 
        alt={supplier.name} 
        className="ai-optimized-image" 
        loading="lazy"
      />
      <div className="supplier-content">
        <h3>
          {supplier.name} 
          {supplier.rating && (
            <span className="ai-rating">⭐ {supplier.rating}</span>
          )}
        </h3>
        <p className="ai-description">{supplier.description}</p>
        <div className="ai-metrics">
          {supplier.verified && (
            <span><i className="fas fa-check-circle"></i> Vérifié par UniAI</span>
          )}
          {supplier.shipping && (
            <span><i className="fas fa-shipping-fast"></i> {supplier.shipping}</span>
          )}
        </div>
        <a href={supplier.link} className="ai-cta">
          Voir les produits <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default SupplierCard;