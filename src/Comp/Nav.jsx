import React, { useEffect, useState, useRef } from 'react';
import { FaUser, FaSearch, FaChevronDown } from 'react-icons/fa';
import '../assets/css/nav.css'; // Assurez-vous que le chemin est correct
const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Gestion du clic en dehors du dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    { id: 1, name: "Produit Standard", description: "Solution de base pour les petites entreprises", price: 19.99 },
    { id: 2, name: "Produit Professionnel", description: "Pour les entreprises en croissance", price: 49.99 },
    { id: 3, name: "Produit Entreprise", description: "Solution complète pour les grandes organisations", price: 99.99 },
    { id: 4, name: "Produit Premium", description: "Notre offre la plus exclusive", price: 199.99 }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-links">
            <a href="#">Aide</a>
            <a href="#">Rejoignez-nous</a>
            <a href="../login">Mode Fournisseur</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <span>MaSociété</span>
            </div>

            {!isMobile && (
              <ul className="nav-links">
                <li><a href="../Home">Accueil</a></li>
                <li 
                  className="dropdown-trigger" 
                  ref={dropdownRef}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <a href="../produit" id="produit-link">
                    Produits <FaChevronDown size={12} />
                  </a>
                </li>
                <li><a href="#">Services</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            )}

            <div className="search-bar">
              <input type="text" placeholder="Rechercher des produits..." />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>

            <div className="auth-buttons">
              <button className="signup-btn">
                <FaUser />
                <span>Connexion</span>
              </button>
            </div>

            {isMobile && (
              <button 
                className="mobile-menu-btn"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && showMobileMenu && (
          <div className="mobile-menu">
            <ul>
              <li><a href="#">Accueil</a></li>
              <li>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}>
                  Produits <FaChevronDown size={12} />
                </a>
                {showDropdown && (
                  <div className="mobile-dropdown">
                    {products.map(product => (
                      <a key={product.id} href="#">{product.name}</a>
                    ))}
                  </div>
                )}
              </li>
              <li><a href="#">Services</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}

        {/* Dropdown Menu (Desktop) */}
        {showDropdown && !isMobile && (
          <div 
            className="dropdown-fullwidth" 
            ref={dropdownRef}
          >
            <div className="container">
              <div className="dropdown-content">
                {products.map(product => (
                  <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;