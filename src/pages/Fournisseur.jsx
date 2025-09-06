import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Comp/Footer';
import Nav from '../Comp/Nav';
import '../assets/css/fournisseur.css';

const Fournisseur = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation à ajouter ici
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Nav />
      <main className="fournisseur-main">
        <section className="fournisseur-section">
          <h1 className="fournisseur-title">Inscription Fournisseur</h1>
          <form className="register-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom complet</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Adresse email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Nom de l'entreprise</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Mot de passe</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Confirmer le mot de passe</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit" className="register-button">S'inscrire</button>
            <div className="login-link">
              <span>Déjà un compte? </span>
              <Link to="/login">Se connecter</Link>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Fournisseur;
