import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiExternalLink } from 'react-icons/fi';
import '../assets/css/carousel.css';
import C1 from '../assets/images/art1.jpg';
import C2 from '../assets/images/art2.jpg';
import C3 from '../assets/images/art3.jpg';
import C4 from '../assets/images/art4.jpg';
import C5 from '../assets/images/art5.png';
import C6 from '../assets/images/art6.jpg';
import C7 from '../assets/images/art7.jpg';
import C8 from '../assets/images/art8.jpg';
import C9 from '../assets/images/art9.jpg';
import C10 from '../assets/images/art10.jpg';
import C11 from '../assets/images/art11.jpg';
import C12 from '../assets/images/art12.jpg';
import C13 from '../assets/images/art13.jpg';
import C14 from '../assets/images/art14.jpg';
import C15 from '../assets/images/art15.jpg';
import C16 from '../assets/images/art16.jpg';
import C17 from '../assets/images/art17.jpg';
import C18 from '../assets/images/art18.jpg';
import C19 from '../assets/images/art19.jpg';
import C20 from '../assets/images/art20.jpg';
import C21 from '../assets/images/art21.jpg';
import C22 from '../assets/images/art22.jpg';

const productImages = [

  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
  C8,
  C9,
  C10,
  C11,
  C12,
  C13,
  C14,
  C15,
  C16,
  C17,
  C18,
  C19,
  C20,
  C21,
  C22,
  // // Images locales
  // '/images/art1.jpg',
  // '/images/art2.jpg',
  // '/images/art3.jpg',
  // '/images/art4.jpg',
  // '/images/art5.png',
  // '/images/art6.jpg',
  // '/images/art7.jpg',
  // '/images/art8.jpg',
  // '/images/art9.jpg',
  // '/images/art10.jpg',
  
];

const ProductImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const prevSlide = () => {
    setCurrent(current === 0 ? productImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === productImages.length - 1 ? 0 : current + 1);
  };

  const handleImageHover = (e) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  // Auto-rotation pour attirer l'attention comme sur Alibaba
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="product-carousel-container">
      <div className="product-image-carousel modern-carousel">
        <button className="carousel-btn left" onClick={prevSlide}>
          <FiChevronLeft size={24} />
        </button>
        
        <div 
          className={`carousel-image-wrapper ${isZoomed ? 'zoomed' : ''}`}
          onMouseMove={handleImageHover}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={productImages[current]}
            alt={`Produit ${current + 1}`}
            className="carousel-image modern-carousel-image"
            style={isZoomed ? { 
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: 'scale(2)'
            } : {}}
          />
          
          <div className="image-actions">
            <button 
              className="action-btn zoom-btn"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <FiZoomIn size={18} />
            </button>
            <button className="action-btn external-btn">
              <FiExternalLink size={18} />
            </button>
          </div>
        </div>
        
        <button className="carousel-btn right" onClick={nextSlide}>
          <FiChevronRight size={24} />
        </button>
        
        <div className="carousel-indicators">
          {productImages.map((_, idx) => (
            <span
              key={idx}
              className={`indicator-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      
      <div className="carousel-thumbnails">
        {productImages.slice(0, 5).map((img, idx) => (
          <div 
            key={idx} 
            className={`thumbnail ${current === idx ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          >
            <img src={img} alt={`Vignette ${idx + 1}`} />
          </div>
        ))}
        {productImages.length > 5 && (
          <div className="thumbnail-more">
            +{productImages.length - 5}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageCarousel;