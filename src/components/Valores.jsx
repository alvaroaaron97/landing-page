import React from 'react';
import '../styles/Valores.css';

const VALORES = [
  {
    title: 'Personas',
    text: 'Creemos en el poder del talento humano, en su capacidad para inspirar, transformar y construir.'
  },
  {
    title: 'Comunicación',
    text: 'La comunicación es el puente que conecta mentes, corazones y visiones. Es el flujo constante de ideas, el arte de escuchar y ser escuchado.'
  },
  {
    title: 'Ser profesionales',
    text: 'Ser profesional no es solo hacer bien el trabajo, es hacerse cargo. Es actuar con criterio, con ética. Cada proyecto es una oportunidad para demostrarlo.'
  }
];

export default function Valores() {
  return (
    <section className="valores-section" id="valores">
      <div className="valores-container">
        <h2 className="valores-title">Valores</h2>
        <div className="valores-cards">
          {VALORES.map((v, i) => (
            <div className="valor-card" key={i}>
              <h3 className="valor-card-title">{v.title}</h3>
              <p className="valor-card-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
