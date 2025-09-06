import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Footer from '../Comp/Footer';
import Nav from '../Comp/Nav';
import '../assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique pour envoyer le formulaire
    // Par exemple, utiliser une API ou un service comme EmailJS
    console.log('Formulaire envoyé:', formData);
    alert('Message envoyé !'); // Remplace ça avec une notification plus élégante
  };

  return (
    <>
      <Nav />
      <main className="contact-main">
        <section className="contact-section">
          <h1 className="contact-title">Contactez-nous</h1>
          <p className="contact-description">
            N'hésitez pas à nous contacter pour toute question, suggestion ou problème. Nous sommes là pour vous aider !
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Envoyer
            </button>
          </form>

          <div className="contact-info">
            <h3>Informations de Contact</h3>
            <p>Adresse: 123 Rue de l'Example, Ville, Pays</p>
            <p>Téléphone: +1 555-123-4567</p>
            <p>Email: contact@example.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
