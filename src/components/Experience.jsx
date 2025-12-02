import React from 'react';
import '../styles/Experience.css';

import ryqLogo from '../assets/ryq-ingenieria-logo.png';
import bechtelLogo from '../assets/bechtel-logo.png';
import santoDomLogo from '../assets/santo-dom-logo.jpg';
import sqmLogo from '../assets/sqm-logo.png';
import siemensLogo from '../assets/siemens-logo.png';

const LOGOS = [
  { src: ryqLogo, alt: 'R&Q Ingeniería' },
  { src: bechtelLogo, alt: 'Bechtel Corporation' },
  { src: santoDomLogo, alt: 'Compañía Minera Santo Domingo' },
  { src: sqmLogo, alt: 'SQM' },
  { src: siemensLogo, alt: 'Siemens' },
];

export default function Experience() {
  return (
    <section className="experience" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Experiencia</h2>
      </div>

      <div className="experience-plate">
        <div className="experience-ring" role="list" aria-label="Logos de empresas donde trabajó Camilo Núñez">
          {LOGOS.map((l, i) => {
            const angle = i * (360 / LOGOS.length) - 90; // start at top
            // radius uses CSS variable --radius defined in CSS
            const transform = `rotate(${angle}deg) translate(var(--radius)) rotate(${ -angle }deg)`;
            return (
              <div
                className="logo-item"
                key={i}
                role="listitem"
                tabIndex={0}
                aria-label={l.alt}
                style={{ transform }}
              >
                <div className="logo-circle">
                  <img src={l.src} alt={l.alt} />
                </div>
              </div>
            );
          })}

          <div className="experience-center" aria-hidden="false">
            <p className="lead">Más de 17 años de experiencia liderando proyectos eléctricos, industriales y mineros</p>
            <p className="muted">Experiencia comprobada en terreno. Ingeniería con visión y resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
