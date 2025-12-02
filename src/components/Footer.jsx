
import React from 'react';
import '../styles/Footer.css';
import logoStanm from '../assets/logo-stanm.png';
import linkedinIcon from '../assets/linkedin-icon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Logo y descripción */}
        <div className="footer-col footer-brand">
          <img src={logoStanm} alt="STAN Multidisciplina logo" className="footer-logo" />
          <p className="footer-desc">
            STAN Multidisciplina: Soluciones integrales en ingeniería, procesos y gestión de proyectos.
          </p>
        </div>
        {/* Links rápidos */}
        <nav className="footer-col footer-links" aria-label="Links rápidos">
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        {/* Contacto */}
        <div className="footer-col footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:camilonunez@stanm.cl">camilonunez@stanm.cl</a></li>
            <li><a href="tel:+56956292475">+56 9 5629 2475</a></li>
            <li>Las parras 1001, San Esteban, Región de Valparaíso</li>
          </ul>
        </div>
        {/* Redes sociales */}
        <div className="footer-col footer-social">
          <h4>Síguenos</h4>
          <a href="https://www.linkedin.com/company/stanm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-social-img" />
          </a>
        </div>
      </div>
      {/* Legal */}
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} STAN Multidisciplina. Todos los derechos reservados. Desarrollado por <span className="footer-dev">Virtual Haze</span>.</span>
      </div>
    </footer>
  );
}
