import React, { useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import '../assets/css/footer.css'

import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaCcVisa, FaCcMastercard, FaCcPaypal, 
  FaCcApplePay, FaCcAmazonPay, FaCcStripe 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Colonne 1 - Même structure mais avec les composants d'icônes */}
        <div className="footer-col">
          <h4>Shopping Line</h4>
          <p>Le meilleur endroit pour trouver des produits et fournisseurs fiables.</p>
          <nav className="footer-nav">
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/categories">Catégories de produit</a></li>
              <li><a href="/acheteur">Acheteur</a></li>
              <li><a href="/fournisseur">Fournisseur</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="social-links">
            <a aria-label="Facebook" href="#"><FaFacebook /></a>
            <a aria-label="Twitter" href="#"><FaTwitter /></a>
            <a aria-label="LinkedIn" href="#"><FaLinkedin /></a>
            <a aria-label="Instagram" href="#"><FaInstagram /></a>
          </div>
        </div>
        
        {/* Colonne 2 - Moyens de paiement */}
        <div className="footer-col">
          <div className="payment-methods">
            <h5>Moyens de paiement</h5>
            <div className="payment-icons">
              <FaCcVisa title="Visa" />
              <FaCcMastercard title="Mastercard" />
              <FaCcPaypal title="PayPal" />
              <FaCcApplePay title="Apple Pay" />
              <FaCcAmazonPay title="Amazon Pay" />
              <FaCcStripe title="Stripe" />
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Centre d'aide</a></li>
            <li><a href="#">Contactez-nous</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Inscrivez-vous pour recevoir les dernières offres et nouvelles.</p>
          <form className="newsletter-form">
            <input placeholder="Votre email" required type="email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} shopping. Tous droits réservés.
      </div>
    </footer>
  );
  
};

export default Footer;