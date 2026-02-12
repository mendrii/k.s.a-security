import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import '../style/Slider.scss';

// Constante para dividir la imagen en 4 partes (como en el CSS)
const IMAGE_PARTS = 4;
const AUTOCHANGE_TIME = 4000;

export const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  
  // Usamos useRef para el timeout para evitar fugas de memoria
  const changeTO = useRef(null);

  useEffect(() => {
    // Inicialización del slider con un pequeño delay para la animación de entrada
    runAutochangeTO();
    const timeout = setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    // Cleanup al desmontar
    return () => {
      clearTimeout(timeout);
      clearTimeout(changeTO.current);
    };
  }, []);

  const runAutochangeTO = () => {
    clearTimeout(changeTO.current); // Limpiamos timer anterior
    changeTO.current = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    // Si no hay slides, no hacemos nada
    if (!slides || slides.length === 0) return;

    const length = slides.length;
    // Capturamos el estado actual
    setActiveSlide((prevActive) => {
      let nextSlide = prevActive + change;
      setPrevSlide(prevActive);
      
      if (nextSlide < 0) nextSlide = length - 1;
      if (nextSlide >= length) nextSlide = 0;
      
      return nextSlide;
    });

    // Reiniciar el timer automático cada vez que cambiamos slide
    runAutochangeTO();
  };

  // Prevenir renderizado si no hay datos
  if (!slides) return null;

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      {/* Título flotante fijo */}
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
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">Ver detalles</p>
            </div>
            
            {/* Aquí ocurre la magia de cortar la imagen */}
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Controles Izquierda / Derecha */}
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