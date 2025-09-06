import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Assurez-vous que la route /products pointe vers ProductsPage dans votre configuration de routes
import { FaUser, FaSearch, FaChevronDown } from 'react-icons/fa';
import '../assets/css/nav.css'; // Assurez-vous que le chemin est correct
const Nav = () => {
  const location = useLocation();
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
            <Link to="/login">Mode Fournisseur</Link>
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
                <li className={location.pathname === '/' ? 'active' : ''}>
                  <Link to="/" style={{ textDecoration: 'none' }}>Accueil</Link>
                </li>
                <li
                  className={`dropdown-trigger ${location.pathname === '/products' ? 'active' : ''}`}
                  ref={dropdownRef}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <Link to="/products" id="products-link" style={{ textDecoration: 'none' }}>
                    catégorie de produit <FaChevronDown size={12} />
                  </Link>
                </li>
                <li className={location.pathname === '/Acheteur' ? 'active' : ''}>
                  <Link to="/Acheteur" style={{ textDecoration: 'none' }}>Acheteurs</Link>
                </li>
                <li className={location.pathname === '/fournisseur' ? 'active' : ''}>
                  <Link to="/fournisseur" style={{ textDecoration: 'none' }}>Fournisseurs</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
                </li>
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
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span>Connexion</span>
                </Link>
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
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/" style={{ textDecoration: 'none' }}>Accueil</Link>
              </li>
              <li className={location.pathname === '/products' ? 'active' : ''}>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }} style={{ textDecoration: 'none' }}>
                  catégorie de produit<FaChevronDown size={12} />
                </a>
                {showDropdown && (
                  <div className="mobile-dropdown">
                    {products.map(product => (
                      <Link key={product.id} to="/products" style={{ textDecoration: 'none' }}>{product.name}</Link>
                    ))}
                  </div>
                )}
              </li>
              <li className={location.pathname === '/Acheteur' ? 'active' : ''}>
                <Link to="/Acheteur" style={{ textDecoration: 'none' }}>Acheteurs</Link>
              </li>
              <li className={location.pathname === '/fournisseur' ? 'active' : ''}>
                <Link to="/fournisseur" style={{ textDecoration: 'none' }}>Fournisseurs</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
              </li>
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