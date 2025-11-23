import React, { useState } from 'react';
import '../styles/ContactForm.css';

const SERVICES = [
  'Ingeniería y Construcción',
  'Asesoría en Gestión de Proyectos',
  'Optimización de Procesos',
  'Inspección Técnica',
  'Arriendo de Equipos',
  'Otro'
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    project: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'El nombre es obligatorio.';
    if (!form.email.trim()) e.email = 'El correo es obligatorio.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Formato de correo inválido.';
    if (!form.message.trim()) e.message = 'Cuéntanos en qué podemos ayudarte.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;
    // If an endpoint is configured via env, POST JSON to it (e.g. Formspree/webhook).
    // Otherwise fallback to opening a mailto: link addressed to Alvaro.
    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT || '';
    if (endpoint) {
      setStatus('sending');
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Network response not ok');
          setStatus('success');
          setForm({ name: '', email: '', phone: '', service: '', project: '', message: '' });
          setErrors({});
          setTimeout(() => setStatus(null), 4000);
        })
        .catch((err) => {
          console.error('Contact form send error', err);
          setStatus('error');
          setTimeout(() => setStatus(null), 4000);
        });
    } else {
      // mailto fallback: opens user's mail client addressed to Alvaro
      const to = 'alvaro.aaron97@gmail.com';
      const subject = encodeURIComponent(`Contacto desde landing: ${form.service || 'Servicio'}`);
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nCorreo: ${form.email}\nTeléfono: ${form.phone}\nServicio: ${form.service}\nProyecto/Empresa: ${form.project}\n\nMensaje:\n${form.message}`
      );
      // open mailto
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setStatus('success');
      setTimeout(() => setStatus(null), 2000);
    }
  }

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <h3 id="contact-title" className="contact-title">Contacto</h3>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              <span>Nombre y Apellido *</span>
              <input
                name="name"
                type="text"
                placeholder="Ej: Juan Pérez"
                value={form.name}
                onChange={handleChange}
                aria-invalid={errors.name ? 'true' : 'false'}
                required
              />
              {errors.name && <div className="field-error">{errors.name}</div>}
            </label>

            <label>
              <span>Correo electrónico *</span>
              <input
                name="email"
                type="email"
                placeholder="Ej: juanperez@empresa.cl"
                value={form.email}
                onChange={handleChange}
                aria-invalid={errors.email ? 'true' : 'false'}
                required
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Teléfono de contacto</span>
              <input
                name="phone"
                type="tel"
                placeholder="Ej: +56 9 1234 5678"
                value={form.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>Servicio de interés</span>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">-- Selecciona --</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row">
            <label className="full">
              <span>Nombre del proyecto o empresa</span>
              <input
                name="project"
                type="text"
                placeholder="Ej: Planta Eléctrica Norte"
                value={form.project}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-row">
            <label className="full">
              <span>Cuéntanos en qué podemos ayudarte *</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Describe brevemente tu requerimiento o proyecto..."
                value={form.message}
                onChange={handleChange}
                aria-invalid={errors.message ? 'true' : 'false'}
                required
              />
              {errors.message && <div className="field-error">{errors.message}</div>}
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>
            {status === 'success' && <div className="form-success">Gracias — respondemos pronto.</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
