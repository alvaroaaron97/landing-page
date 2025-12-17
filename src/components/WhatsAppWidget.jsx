
import React, { useState } from 'react';
import '../styles/WhatsAppWidget.css';
import wspIconStatic from '../assets/icon-wsp-static.png';
import wspIconAnimated from '../assets/icon-wsp.apng';

const whatsappNumber = '56998561043';
const whatsappUrl = `https://wa.me/${whatsappNumber}`;



const WhatsAppWidget = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? wspIconAnimated : wspIconStatic}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppWidget;
