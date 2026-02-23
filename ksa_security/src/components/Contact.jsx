import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';
import ReCAPTCHA from 'react-google-recaptcha';



export const Contact = () => {
  const captchaRef = useRef(null);
  const [errorCaptcha, setErrorCaptcha] = useState(false);
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [captchaValido, setCaptchaValido] = useState(null); // <--- 3. ESTADO PARA SABER SI ES HUMANO

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValido(value); // Guardamos el token si el usuario pasó la prueba
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // <--- 4. VALIDACIÓN DE SEGURIDAD
    if (!captchaValido) {
      setErrorCaptcha(true); // Activamos el mensaje rojo
      return;
    }
    setStatus('sending');

    // REEMPLAZA ESTOS VALORES CON LOS DE TU CUENTA DE EMAILJS
    // (Service ID, Template ID, Public Key)
    emailjs
      .sendForm(
        serviceId, 
        templateId, 
        form.current, 
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset(); // Limpia el formulario
          // <--- 5. REINICIAR EL CAPTCHA AL ENVIAR
          setCaptchaValido(null);
          if (captchaRef.current) {
            captchaRef.current.reset();
          }
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
            <div className="phone-input-container">
              {/* Agregamos el +56 visualmente para que el usuario solo escriba el resto */}
              <span className="prefix">+56</span>
              <input 
                type="tel" 
                name="user_phone" 
                required 
                placeholder="9 1234 5678"
                pattern="9[0-9]{8}" 
                maxLength="9"
                minLength="9"
                title="El número debe comenzar con 9 y tener 9 dígitos en total"
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Solo permite números
              />
            </div>
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea name="message" required rows="4" placeholder="Necesito cámaras para mi condominio..."></textarea>
          </div>

          {/* <--- 6. AQUÍ VA EL COMPONENTE VISUAL DEL CAPTCHA */}
          <div className="form-group captcha-container">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey="6LfcenUsAAAAAHbRXBqKfkXInRuWodQnIw66BAV-" 
              onChange={onCaptchaChange}
              theme="dark" /* Tema oscuro para que combine con tu azul */
            />
          </div>

          {errorCaptcha && (
             <div className="captcha-error-msg">
               ⚠️ Por favor, confirma que no eres un robot.
             </div>
          )}

          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
          </button>

          {status === 'success' && <p className="msg-success">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>}
          {status === 'error' && <p className="msg-error">Hubo un error. Por favor escríbenos directo al WhatsApp.</p>}

          <div className="contact-payment-info">
              <p className="payment-text">Aceptamos múltiples medios de pago para tu comodidad:</p>
              <div className="payment-display">
                  <div className="other-methods">
                      <span>• Transferencia Bancaria</span>
                      <span>• Tarjetas de Crédito/Débito</span>
                  </div>
                   <img 
                      src="https://puraofertas.cl/wp-content/uploads/2022/06/logo-webpay-plus-3-copy.png" 
                      alt="Webpay Plus" 
                      className="payment-img-highlight" 
                  />
              </div>
          </div>
        </form>
      </div>
    </section>
  );
};