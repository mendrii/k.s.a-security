import React from 'react';
import '../Style/Ubicacion.css';

const Ubicacion = () => {
  return (
    <section className="ubicacion-container">
      {/* Ícono de mapa con pin (puedes reemplazar el SVG por tu propia imagen si la tienes exportada) */}
      <div className="ubicacion-icono">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 2C21.5 2 13 10.5 13 21C13 35.2 32 58 32 58C32 58 51 35.2 51 21C51 10.5 42.5 2 32 2ZM32 28C28.1 28 25 24.9 25 21C25 17.1 28.1 14 32 14C35.9 14 39 17.1 39 21C39 24.9 35.9 28 32 28Z" fill="#EA4335"/>
       
        </svg>
      </div>

      <h2 className="ubicacion-titulo">
        ¡PROTEGEMOS LO QUE MÁS TE IMPORTA EN TODA LA REGIÓN DE VALPARAÍSO!
      </h2>
      
      <div className="ubicacion-divisor"></div>
      
      <p className="ubicacion-subtitulo">
        Llevamos nuestras soluciones directamente a tus instalaciones. Coordina una visita técnica presencial o conéctate online con nuestro equipo.<br />
      
      </p>

      <div className="ubicacion-mapa">
        {/* Reemplaza el src con el enlace de inserción exacto de tu dirección en Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9643226691664!2d-71.4962635244857!3d-33.00471607356935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dc1a74cfbd33%3A0xdf3dc4b5807b42c5!2sAv.%20Las%20Azucenas%20890%2C%202551066%20Valpara%C3%ADso%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1770996092835!5m2!1ses-419!2scl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación Providencia"
        ></iframe>
      </div>
    </section>
  );
};

export default Ubicacion;