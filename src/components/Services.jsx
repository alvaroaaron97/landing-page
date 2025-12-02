import React, { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';

const SERVICES = [
  {
    id: 'ingenieria',
    title: 'Ingeniería y Construcción',
    subtitle: 'Diseño, planificación y ejecución de proyectos eléctricos, industriales y mineros.',
    icon: '🏗️'
  },
  {
    id: 'asesorias',
    title: 'Asesorías en Gestión de Proyectos',
    subtitle: 'Planificación, control y optimización de recursos.',
    icon: '📋'
  },
  {
    id: 'optimizacion',
    title: 'Optimización de Procesos',
    subtitle: 'Diagnóstico, mejora y automatización de procesos industriales.',
    icon: '🔁'
  },
  {
    id: 'inspeccion',
    title: 'Inspección Técnica',
    subtitle: 'Supervisión técnica en terreno y aseguramiento de calidad.',
    icon: '🔍'
  },
  {
    id: 'arriendo',
    title: 'Arriendo de Equipos',
    subtitle: 'Equipos eléctricos y herramientas para trabajos industriales.',
    icon: '⚡'
  }
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(3);
  const intervalRef = useRef(null);

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
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
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => {
          const maxIndex = Math.max(0, SERVICES.length - visible);
          return i >= maxIndex ? 0 : i + 1;
        });
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, visible]);

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

  const trackStyle = {
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
                          {/* Inline monochrome SVG icons (flat, sober) */}
                          {s.id === 'ingenieria' && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M3 13h18v2H3v-2z" fill="#0B1220" opacity="0.08"/>
                              <path d="M5 11V7a1 1 0 011-1h2v6H5zM11 6h2v11h-2zM16 9h2v8h-2z" stroke="#0B1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {s.id === 'asesorias' && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <rect x="3" y="4" width="14" height="16" rx="2" stroke="#0B1220" strokeWidth="1.2"/>
                              <path d="M7 8h6M7 12h6M7 16h4" stroke="#0B1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {s.id === 'optimizacion' && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M21 12a9 9 0 10-9 9" stroke="#0B1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21 3v6h-6" stroke="#0B1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {s.id === 'inspeccion' && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <circle cx="11" cy="11" r="5" stroke="#0B1220" strokeWidth="1.2"/>
                              <path d="M21 21l-4.35-4.35" stroke="#0B1220" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                          )}
                          {s.id === 'arriendo' && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M12 2v6" stroke="#0B1220" strokeWidth="1.4" strokeLinecap="round"/>
                              <rect x="6" y="8" width="12" height="12" rx="2" stroke="#0B1220" strokeWidth="1.2"/>
                              <path d="M9 14h6" stroke="#0B1220" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          )}
                        </div>
                        <p className="service-subtitle">{s.subtitle}</p>
                      </div>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
