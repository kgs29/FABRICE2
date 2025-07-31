import React, { useState, useEffect } from 'react';
import '../assets/css/Dashboard.css';


function Dashboard() {
  const [openSections, setOpenSections] = useState({
    home: false,
    config: false,
    content: false,
    orders: false,
    products: false,
    analytics: false
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Fermer tous les menus en mode mobile
      if (window.innerWidth >= 768) {
        setOpenSections({
          home: true,
          config: true,
          content: true,
          orders: true,
          products: true,
          analytics: true
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialisation
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">STORE.BUILDER</div>
        <div className="header-right">
          <button className="auth-button">S'authentifier</button>
          <span className="admin-text">Admin</span>
        </div>
      </header>
      
      <div className="dashboard-content">
        <nav className="sidebar">
          <div className="nav-section">
            <h2>DASHBOARD</h2>
          </div>
          
          {['home', 'config', 'content', 'orders', 'products', 'analytics'].map((section) => (
            <div key={section} className="nav-section">
              <h3 onClick={() => toggleSection(section)}>
                {section === 'home' && 'Page Accueil'}
                {section === 'config' && 'Configuration'}
                {section === 'content' && 'Contenu'}
                {section === 'orders' && 'Commandes'}
                {section === 'products' && 'Produits'}
                {section === 'analytics' && 'Analyse'}
                <span className="dropdown-icon">{openSections[section] ? '▼' : '▶'}</span>
              </h3>
              <ul className={openSections[section] ? 'open' : ''}>
                {section === 'home' && (
                  <>
                    <li>Boutique</li>
                    <li>Contactez-nous</li>
                    <li>Publications</li>
                  </>
                )}
                {section === 'config' && (
                  <>
                    <li>Mode de paiement</li>
                    <li>Mode d'expédition</li>
                  </>
                )}
                {section === 'content' && (
                  <>
                    <li>Produits</li>
                    <li>Articles</li>
                    <li>Médias</li>
                  </>
                )}
                {section === 'orders' && (
                  <>
                    <li>Commandes</li>
                    <li>Clients</li>
                    <li>Retours</li>
                  </>
                )}
                {section === 'products' && (
                  <>
                    <li>Produits</li>
                    <li>Liste produits</li>
                    <li>Catégories</li>
                    <li>Inventaire</li>
                  </>
                )}
                {section === 'analytics' && (
                  <>
                    <li>Visiteurs</li>
                    <li>Pages vues</li>
                    <li>Dashboard</li>
                    <li>Rapports</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </nav>
        
        <main className="main-content">
          <div className="breadcrumb">
            <span className="home-icon">🏠</span>
            <span>Home &gt; Dashboard</span>
          </div>
          
          <div className="stats-container">
            {[
              { title: "Chiffre d'affaire", value: "45 000 000 ⭕" },
              { title: "Bénéfice", value: "70% ⭕" },
              { title: "Produits vendus", value: "90% ⭕" }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <h4>{stat.title}</h4>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>
          
          <div className="charts-container">
            <div className="chart">
              <h4>Tendance des ventes</h4>
              <div className="sales-chart">
                {[60, 65, 63].map((height, index) => (
                  <div key={index} className="bar" style={{ height: `${height}%` }}>
                    <span>{height}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="best-clients">
              <h4>Meilleurs Clients</h4>
              <div className="clients-list">
                {Array(7).fill(null).map((_, index) => (
                  <div key={index} className="client-item">
                    <span>Client {index + 1}:</span>
                    <div className="progress-bar" style={{ width: `${100 - (index * 10)}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;