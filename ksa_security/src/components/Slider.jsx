import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import '../style/Slider.scss';


const AUTOCHANGE_TIME = 4000; // Tiempo de cambio automático (4 segundos)

export const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(true);
  
  // Referencia para el temporizador de cambio automático
  const changeTO = useRef(null);

  useEffect(() => {
    runAutochangeTO();
    // Limpieza al desmontar el componente
    return () => {
      clearTimeout(changeTO.current);
    };
  }, []);

  // Función para iniciar/reiniciar el temporizador
  const runAutochangeTO = () => {
    clearTimeout(changeTO.current);
    changeTO.current = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  // Lógica para cambiar de diapositiva
  const changeSlides = (change) => {
    if (!slides || slides.length === 0) return;

    const length = slides.length;
    setActiveSlide((prevActive) => {
      let nextSlide = prevActive + change;
      setPrevSlide(prevActive);
      
      // Ciclo infinito (al llegar al final vuelve al inicio)
      if (nextSlide < 0) nextSlide = length - 1;
      if (nextSlide >= length) nextSlide = 0;
      
      return nextSlide;
    });

    runAutochangeTO();
  };

  // Función para scroll suave hasta la sección de contacto
  const scrollToContact = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!slides) return null;

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      {/* Título superior fijo */}
      <p className="slider__top-heading">Seguridad & Vigilancia</p>
      
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city || index}
          >
            {/* Contenido de texto (Ciudad y País/Categoría) */}
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
            </div>
            
            {/* Imagen de fondo simplificada */}
            <img src={slide.img} alt={slide.city} className="slider__slide-image" />

          </div>
        ))}
      </div>

      {/* Botón de llamado a la acción fijo */}
       <button className="slider__fixed-btn" onClick={scrollToContact}>
          CONTÁCTANOS
        </button>
      
      {/* Controles laterales */}
      <div
        className="slider__control"
        onClick={() => changeSlides(-1)}
      />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};