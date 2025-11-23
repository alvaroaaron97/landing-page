import React from 'react';
import '../styles/ProjectCards.css';
import logoStanm from '../assets/logo-stanm.png';

function AboutUs() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <h2 id="about-title" className="about-title">Sobre Nosotros</h2>
        <article className="about-main" aria-label="Sobre STAN Multidisciplina">
          <div className="about-main-inner">
            <div className="about-main-image" aria-hidden="true">
              <img src={logoStanm} alt="Logo STAN Multidisciplina" />
            </div>
            <div className="about-main-copy">
              <p>
                STAN Multidisciplina es una empresa de ingeniería dedicada a entregar soluciones integrales en
                ingeniería, procesos y gestión de proyectos, con amplia experiencia en el sector minero e industrial.
                Nos caracteriza la calidad, el compromiso y la mirada de largo plazo, trabajando siempre en equipo y
                con enfoque en las verdaderas necesidades del cliente.
              </p>
            </div>
          </div>
        </article>
        <div className="about-columns">
          <article className="about-card mission" aria-labelledby="mission-title">
            <h3 id="mission-title">Misión</h3>
            <p>
              Entregamos soluciones en ingeniería, procesos y gestión de proyectos con fuerte experiencia en minería.
              Nos mueve hacer las cosas bien, en equipo y con mirada de largo plazo.
            </p>
          </article>

          <article className="about-card vision" aria-labelledby="vision-title">
            <h3 id="vision-title">Visión</h3>
            <p>
              Queremos crecer junto a nuestros clientes, dejando huella por cómo trabajamos y por los resultados que logramos.
              Buscamos llevar la minería y la industria a un nuevo nivel con soluciones simples, efectivas y hechas con sentido.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;