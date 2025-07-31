import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Comp/Nav.jsx';
import Footer from '../Comp/Footer.jsx';
import '../assets/css/style.css';
import img1 from '../assets/images/art1.jpg';
import img2 from '../assets/images/art2.jpg';
import img3 from '../assets/images/art3.jpg';
import img4 from '../assets/images/art4.jpg';
import img5 from '../assets/images/art5.png';
import img6 from '../assets/images/art6.jpg';
import img7 from '../assets/images/art7.jpg';
import img8 from '../assets/images/art8.jpg';
import img9 from '../assets/images/art9.jpg';
import img10 from '../assets/images/art10.jpg';

// Icônes pour les services
import { FaShieldAlt, FaHeadset, FaCreditCard, FaShippingFast } from 'react-icons/fa';


function Home() {
  return (
    <>
    
    {/* Bannière de bienvenue */}
    <div>
      <Nav/>
       
      <main className="container">
        {/* Bannière promotionnelle */}
        <div className="promo-banner">
          <p>� Livraison gratuite à partir de 50€ | Retours faciles sous 30 jours</p>
        </div>
        
        {/* Catégories */}
        <section className="categories">
          <h2 className="section-title">Catégories populaires</h2>
          <div className="category-grid">
            <a href="#" className="category-card">
              <i><img src={img1} alt="Électronique"/></i>
              <h3>Électronique</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img7} alt="Vêtements"/></i>
              <h3>Vêtements</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img5} alt="Machines"/></i>
              <h3>Machines</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img2} alt="Maison & Jardin"/></i>
              <h3>Maison & Jardin</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img9} alt="Beauté"/></i>
              <h3>Beauté</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img8} alt="Sports"/></i>
              <h3>Sports</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img10} alt="Automobile"/></i>
              <h3>Automobile</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img6} alt="Santé"/></i>
              <h3>Santé</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img4} alt="Bébés & Enfants"/></i>
              <h3>Bébés & Enfants</h3>
            </a>
            <a href="#" className="category-card">
              <i><img src={img3} alt="Toutes catégories"/></i>
              <h3>Toutes catégories</h3>
            </a>
          </div>
        </section>
        
        {/* Produits phares */}
        <section className="featured-products">
          <h2 className="section-title">Produits phares</h2>
          <div className="product-grid">
            <div className="product-card">
              <span className="badge">Nouveau</span>
              <div className="product-image">
                <i><img src={img3} alt="Smartphone Android"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Smartphone Android 128GB Double SIM</h3>
                <div className="product-price">€189.99 <span className="old-price">€229.99</span></div>
                <div className="product-meta">
                  <span>100+ commandes</span>
                  <span>4.5★ (128)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <span className="badge">Promo</span>
              <div className="product-image">
                <i><img src={img4} alt="Montre connectée"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Montre connectée étanche</h3>
                <div className="product-price">€45.50 <span className="old-price">€59.99</span></div>
                <div className="product-meta">
                  <span>250+ commandes</span>
                  <span>4.8★ (342)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <i><img src={img1} alt="Casque Bluetooth"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Casque Bluetooth sans fil</h3>
                <div className="product-price">€32.99</div>
                <div className="product-meta">
                  <span>180+ commandes</span>
                  <span>4.6★ (215)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <span className="badge">Meilleure vente</span>
              <div className="product-image">
                <i><img src={img2} alt="Sac à dos"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Sac à dos professionnel 15.6"</h3>
                <div className="product-price">€28.75</div>
                <div className="product-meta">
                  <span>320+ commandes</span>
                  <span>4.7★ (287)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <i><img src={img5} alt="Imprimante"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Imprimante multifonction WiFi</h3>
                <div className="product-price">€129.00</div>
                <div className="product-meta">
                  <span>75+ commandes</span>
                  <span>4.4★ (92)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <span className="badge">Top</span>
              <div className="product-image">
                <i><img src={img6} alt="Ventilateur"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Ventilateur de bureau USB</h3>
                <div className="product-price">€12.99</div>
                <div className="product-meta">
                  <span>500+ commandes</span>
                  <span>4.9★ (412)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <i><img src={img7} alt="Lampe LED"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Lampe LED rechargeable</h3>
                <div className="product-price">€8.50</div>
                <div className="product-meta">
                  <span>420+ commandes</span>
                  <span>4.7★ (356)</span>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <i><img src={img8} alt="Câbles USB-C"/></i>
              </div>
              <div className="product-info">
                <h3 className="product-title">Lot de 5 câbles USB-C</h3>
                <div className="product-price">€9.99</div>
                <div className="product-meta">
                  <span>600+ commandes</span>
                  <span>4.8★ (521)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="services">
          <div className="service-item">
            <i><FaShieldAlt /></i>
            <div>
              <h3>Protection d'acheteur</h3>
              <p>Remboursement si non reçu</p>
            </div>
          </div>
          <div className="service-item">
            <i><FaHeadset /></i>
            <div>
              <h3>Assistance client</h3>
              <p>24h/7j assistance</p>
            </div>
          </div>
          <div className="service-item">
            <i><FaCreditCard /></i>
            <div>
              <h3>Paiement sécurisé</h3>
              <p>Méthodes de paiement variées</p>
            </div>
          </div>
          <div className="service-item">
            <i><FaShippingFast /></i>
            <div>
              <h3>Logistique mondiale</h3>
              <p>Expédition dans le monde entier</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>

    </>
  );
}

export default Home;




