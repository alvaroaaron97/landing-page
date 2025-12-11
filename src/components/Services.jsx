import React, { useState, useEffect, useRef } from 'react';

import '../styles/Services.css';
import arriendoIcon from '../assets/arriendo-icon.png';
import electricidadIcon from '../assets/electricidad-casa.png';
import gestionIcon from '../assets/gestion-icon.png';
import inspeccionIcon from '../assets/inspeccion-icon.png';
import optimizacionIcon from '../assets/optimizacion-icon.png';

const SERVICES = [
  {
    id: 'ingenieria',
    title: 'Ingeniería y Construcción',
    subtitle: 'Diseño, planificación y ejecución de proyectos eléctricos, industriales y mineros.',
    icon: electricidadIcon
  },
  {
    id: 'asesorias',
    title: 'Asesorías en Gestión de Proyectos',
    subtitle: 'Planificación, control y optimización de recursos.',
    icon: gestionIcon
  },
  {
    id: 'optimizacion',
    title: 'Optimización de Procesos',
    subtitle: 'Diagnóstico, mejora y automatización de procesos industriales.',
    icon: optimizacionIcon
  },
  {
    id: 'inspeccion',
    title: 'Inspección Técnica',
    subtitle: 'Supervisión técnica en terreno y aseguramiento de calidad.',
    icon: inspeccionIcon
  },
  {
    id: 'arriendo',
    title: 'Arriendo de Equipos',
    subtitle: 'Equipos eléctricos y herramientas para trabajos industriales.',
    icon: arriendoIcon
  }
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);
  const intervalRef = useRef(null);

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      setIsMobile(w <= 560);
      if (w >= 1100) setVisible(3);
      else if (w >= 800) setVisible(2);
      else setVisible(1);
    }
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Auto-advance, but cap index so we don't show empty space
  useEffect(() => {
    if (!paused && !isMobile) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => {
          const maxIndex = Math.max(0, SERVICES.length - visible);
          return i >= maxIndex ? 0 : i + 1;
        });
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, visible, isMobile]);

  // clamp index when visible changes to avoid overshooting available slides
  useEffect(() => {
    const maxIndex = Math.max(0, SERVICES.length - visible);
    setIndex((i) => (i > maxIndex ? maxIndex : i));
  }, [visible]);

  function goNext() {
    setIndex((i) => {
      const maxIndex = Math.max(0, SERVICES.length - visible);
      return i >= maxIndex ? 0 : i + 1;
    });
  }

  function goPrev() {
    setIndex((i) => {
      const maxIndex = Math.max(0, SERVICES.length - visible);
      return i <= 0 ? maxIndex : i - 1;
    });
  }

  const trackStyle = isMobile ? {} : {
    transform: `translateX(-${(index * (100 / visible)).toFixed(4)}%)`
  };

  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="services-container">
        <h3 id="services-title" className="services-title">Servicios</h3>
        <div
          className="services-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="services-viewport">
            <div className="services-track" style={trackStyle}>
              {SERVICES.map((s) => (
                <div className="service-slide" key={s.id}>
                  <div className="service-card">
                    <h4 className="service-title">{s.title}</h4>
                    <div className="service-icon" aria-hidden="true">
                      <img src={s.icon} alt={s.title + ' icono'} className="service-icon-img" />
                    </div>
                    <p className="service-subtitle">{s.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!isMobile && (
            <>
              <button className="services-prev" aria-label="Anterior" onClick={goPrev}>
                ‹
              </button>
              <button className="services-next" aria-label="Siguiente" onClick={goNext}>
                ›
              </button>
              <div className="services-dots" role="tablist" aria-label="Seleccionar servicio">
                {Array.from({ length: Math.max(1, SERVICES.length - visible + 1) }).map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === index ? 'dot-active' : ''}`}
                    aria-label={`Ir a ${i + 1}`}
                    aria-pressed={i === index}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
