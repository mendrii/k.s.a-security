import React from 'react';
import '../style/About.css';
import { FaUserShield, FaHandshake, FaTools } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        
        {/* PARTE SUPERIOR: FOTO + TEXTO */}
        <div className="about-hero">
          <div className="about-image-wrapper">
            {/* Usamos la imagen del técnico que generamos o una de equipo */}
            <img src="/img/equipo_tecnico.webp" alt="Equipo KSA Security" />
            <div className="experience-badge">
              <span className="years">TOP</span>
              <span className="text">CALIDAD</span>
            </div>
          </div>
          
          <div className="about-text-content">
            <h4 className="small-title">SOBRE NOSOTROS</h4>
            <h2 className="main-title">
              MÁS QUE TÉCNICOS, SOMOS TU <span className="highlight">ALIADO EN SEGURIDAD</span>
            </h2>
            <p className="description">
              En KSA Security entendemos que la seguridad no es un lujo, es una necesidad. 
              Nacimos en la V Región con una misión clara: profesionalizar la instalación 
              de tecnología en hogares y condominios.
            </p>
            <p className="description">
              Nos diferenciamos por el detalle. No dejamos cables colgando, no desaparecemos 
              después de cobrar y, sobre todo, te enseñamos a usar tu sistema para que 
              tengas el control total.
            </p>
            
            <div className="stats-row">
              {/* <div className="stat-item">
                <h3>+500</h3>
                <p>Cámaras Instaladas</p>
              </div> */}
              <div className="stat-item">
                <h3>100%</h3>
                <p>Garantía Técnica</p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE INFERIOR: TARJETAS DE VALORES */}
        <div className="about-values-grid">
          
          <div className="value-card">
            <div className="icon-circle"><FaUserShield /></div>
            <h3>Confianza Total</h3>
            <p>Sabemos que entrar a tu hogar es un privilegio. Nuestro personal está identificado, certificado y cuenta con antecedentes impecables.</p>
          </div>

          <div className="value-card">
            <div className="icon-circle"><FaTools /></div>
            <h3>Estética Impecable</h3>
            <p>Odiamos los cables a la vista tanto como tú. Realizamos canalizaciones prolijas que respetan la estética de tu fachada.</p>
          </div>

          <div className="value-card">
            <div className="icon-circle"><FaHandshake /></div>
            <h3>Post-Venta Real</h3>
            <p>La relación no termina en la instalación. Si tienes una duda o falla, respondemos el teléfono y solucionamos.</p>
          </div>

        </div>
      </div>
    </section>
  );
};