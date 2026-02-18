import React from 'react';
import '../style/Footer.css'; 
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Función para volver al inicio suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Izquierda: Logo y Copyright */}
        <div className="footer-left">
          <div className="footer-logo">
            <img 
              src="/img/Logo_terminado.png" 
              alt="K.S.A SECURITY Logo" 
              className="footer-brand-img"
            />
          </div>
          <p className="footer-company-name">SEGURIDAD KSA © 2026</p>
          
          {/* NUEVA SECCIÓN: Métodos de Pago */}
            <div className="footer-payments">
              <p className="payments-title">Paga seguro con:</p> {/* Título más directo */}
              <div className="payment-icons">
                <img 
                  src="https://puraofertas.cl/wp-content/uploads/2022/06/logo-webpay-plus-3-copy.png" 
                  alt="Webpay Plus Chile" 
                  className="payment-img" 
                />
              </div>
            </div>

        </div>
        {/* Centro: Contacto y Horario */}
        <div className="footer-center">
          <div className="footer-contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <p><span>Valparaíso, Chile</span></p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <p>+56 958042898</p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <p><a href="mailto:soporte@empresa.com" className="email-link">soporte@empresa.com</a></p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaClock /></div>
            <p>Lunes-Sábado: 9:00 - 19:00</p>
          </div>
        </div>

        {/* Derecha: Descripción y Redes */}
        <div className="footer-right">
          <div className="footer-about">
            <h3>ACERCA DE LA EMPRESA</h3>
            <p>
              En KSA SECURITY nos especializamos en proteger lo que más valoras. 
              Expertos en cámaras HD, cercos certificados SEC y alarmas inteligentes.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>

      </div>

      {/* BOTÓN VOLVER ARRIBA */}
      <button className="scroll-to-top" onClick={scrollToTop} title="Volver arriba">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;