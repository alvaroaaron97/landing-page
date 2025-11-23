import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';



const Carousel = () => {
    const images = [carousel1, carousel2, carousel3]; // Lista de imágenes
    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual
  
    // Función para cambiar de imagen automáticamente
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Siguiente imagen
      }, 3000); // Cambia cada 3 segundos
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [images.length]);
  
    return (
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />

    <div className="carousel-title" role="group" aria-label="Carousel heading">
      <h1>Ingeniería con propósito: soluciones que transforman la minería e industria
      </h1>
    </div>
      </div>
    );
  };
  
  export default Carousel;