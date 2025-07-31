import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../assets/css/carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Slides mixant textes attractifs et images produits
  const slides = [
    {
      type: 'text',
      title: 'Trouvez des millions de produits et fournisseurs',
      content: 'Achetez en gros, trouvez des fournisseurs fiables et développez votre entreprise.',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Nouveautés Technologiques',
      content: 'Découvrez les dernières innovations à prix imbattables'
    },
    {
      type: 'text',
      title: 'Livraison Rapide & Sécurisée',
      content: 'Recevez vos commandes en 48h avec notre réseau logistique optimisé',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Mode & Accessoires',
      content: 'Les tendances du moment à petits prix'
    },
    {
      type: 'text',
      title: 'Réductions Exceptionnelles',
      content: 'Jusqu\'à -70% sur une sélection de produits premium',
      bgColor: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Équipement Professionnel',
      content: 'Tout le matériel pour développer votre business'
    },
    {
      type: 'text',
      title: 'Service Client 24/7',
      content: 'Notre équipe est disponible à tout moment pour vous accompagner',
      bgColor: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Maison & Déco',
      content: 'Créez un intérieur qui vous ressemble'
    },
    {
      type: 'text',
      title: 'Paiement Sécurisé',
      content: 'Transaction cryptée et protection des données garanties',
      bgColor: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'High-Tech & Gadgets',
      content: 'Les meilleures marques au meilleur prix'
    }
  ];

  // IA de gestion du carrousel (algorithme de rotation intelligente)
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => {
        // Algorithmes pour déterminer la prochaine slide la plus pertinente
        const isLastSlide = prev === slides.length - 1;
        const shouldSkipToProduct = prev % 2 === 0; // Alterne mieux entre textes et images
        
        if (shouldSkipToProduct) {
          const nextProductSlide = slides.findIndex((slide, index) => 
            index > prev && slide.type === 'image'
          );
          return nextProductSlide !== -1 ? nextProductSlide : 0;
        }
        
        return isLastSlide ? 0 : prev + 1;
      });
    }, 5000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Gestion du swipe pour mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  return (
    <section 
      className="hero-carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: slide.type === 'image' ? `url(${slide.imageUrl})` : slide.bgColor,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.content}</p>
              <button className="cta-button">Découvrir maintenant</button>
            </div>
          </div>
        ))}

        <button className="carousel-control prev" onClick={goToPrev}>
          <FiChevronLeft size={32} />
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          <FiChevronRight size={32} />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;