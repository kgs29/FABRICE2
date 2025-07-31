
import React from 'react';
import SupplierCard from './SupplierCard';
import '../assets/css/supplier.css';
const SuppliersSection = () => {
  // Données simulées (en pratique, viendrait d'une API ou state management)
  const suppliers = [
    {
      id: 1,
      name: "Fournisseur Alpha",
      image: "https://storage.googleapis.com/a1aa/image/13539224-58a3-4f8b-0017-b1161c57b5af.jpg",
      description: "Spécialiste certifié en électronique innovante | Réponse sous 2h",
      rating: "4.8 (1.2k)",
      badge: "Top Transaction 2024",
      verified: true,
      shipping: "Expédition 24h",
      link: "#",
      isRecommended: true
    },
    // ... autres fournisseurs
  ];

  return (
    <section className="suppliers-section ai-enhanced">
      <div className="section-header">
        <h2>🔍 Fournisseurs vérifiés par UniAI</h2>
        <p className="ai-subtitle">Sélection intelligente basée sur vos préférences</p>
      </div>
      
      <div className="suppliers-grid">
        {suppliers.map(supplier => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>
      
      <div className="ai-suggestion">
        <p>💡 UniAI recommande : <a href="#">Comparer avec 12 fournisseurs similaires</a></p>
      </div>
    </section>
  );
};

export default SuppliersSection;

