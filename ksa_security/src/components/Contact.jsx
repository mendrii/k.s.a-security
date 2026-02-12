import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REEMPLAZA ESTOS VALORES CON LOS DE TU CUENTA DE EMAILJS
    // (Service ID, Template ID, Public Key)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current, 
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset(); // Limpia el formulario
          setTimeout(() => setStatus(''), 5000); // Borra el mensaje a los 5s
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        }
      );
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <h2 className="section-title">Hablemos de Seguridad</h2>
        <p className="section-subtitle">Cotiza tu proyecto o solicita una visita técnica.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input type="text" name="user_name" required placeholder="Ej: Juan Pérez" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" required placeholder="juan@ejemplo.com" />
          </div>

          <div className="form-group">
            <label>Teléfono / WhatsApp</label>
            <input type="tel" name="user_phone" placeholder="+56 9 ..." />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea name="message" required rows="4" placeholder="Necesito cámaras para mi condominio..."></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
          </button>

          {status === 'success' && <p className="msg-success">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>}
          {status === 'error' && <p className="msg-error">Hubo un error. Por favor escríbenos directo al WhatsApp.</p>}
        </form>
      </div>
    </section>
  );
};