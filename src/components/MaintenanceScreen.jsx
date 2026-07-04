import React from 'react';
import '../styles/MaintenanceScreen.css';
import logo from '../assets/logo-stanm.png';

function MaintenanceScreen() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card" aria-label="Sitio en mantención">
        <img className="maintenance-logo" src={logo} alt="STANM" />
        <p className="maintenance-kicker">Sitio en mantención</p>
        <h1 className="maintenance-title">Volveremos muy pronto</h1>
        <p className="maintenance-text">
          Estamos realizando mejoras para ofrecerte una mejor experiencia.
          Gracias por tu paciencia y comprensión.
        </p>
      </section>
    </main>
  );
}

export default MaintenanceScreen;
