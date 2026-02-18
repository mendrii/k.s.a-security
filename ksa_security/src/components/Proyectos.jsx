import React, { useState } from 'react';
import '../style/Proyectos.css'; 
import { PROYECTOS_DATA } from '../data/proyect_data'; 

export const Proyectos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === PROYECTOS_DATA.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? PROYECTOS_DATA.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="proyectos" className="projects-section">
            <div className="projects-container">
                
                <div className="projects-header">
                    <h2 className="projects-title">
                        PROYECTOS <span className="highlight">DESTACADOS</span>
                    </h2>
                    <p className="projects-subtitle">
                        Soluciones tecnológicas reales implementadas en la V Región.
                    </p>
                </div>

                {/* CONTENEDOR PRINCIPAL DEL SLIDER */}
                <div className="projects-slider-wrapper">
                    
                    {/* Botón Anterior */}
                    <button className="slider-arrow prev" onClick={prevSlide}>
                        &#10094;
                    </button>

                    {/* Ventana visible del slider */}
                    <div className="projects-slider-viewport">
                        {/* Pista que se mueve a los lados */}
                        <div 
                            className="projects-slider-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {PROYECTOS_DATA.map((proyecto, index) => (
                                /* Cada slide mantiene la estructura superpuesta (alternando si es par/impar) */
                                <div key={proyecto.id} className={`project-slide ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                    
                                    <div className="project-image-wrapper">
                                        {/* CONDICIONAL DEL VIDEO VIMEO */}
                                        {proyecto.vimeoId ? (
                                            <iframe 
                                                src={`https://player.vimeo.com/video/${proyecto.vimeoId}?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479`} 
                                                style={{ 
                                                    position: 'absolute', 
                                                    top: 0, 
                                                    left: 0, 
                                                    width: '100%', 
                                                    height: '100%',
                                                    pointerEvents: 'none' /* Evita que el iframe bloquee el mouse */
                                                }}
                                                frameBorder="0" 
                                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                title={proyecto.title}
                                            ></iframe>
                                        ) : (
                                            /* IMAGEN POR DEFECTO SI NO HAY VIDEO */
                                            <img src={proyecto.images ? proyecto.images[0] : proyecto.image} alt={proyecto.title} />
                                        )}
                                        <div className="image-overlay"></div>
                                    </div>

                                    <div className="project-info-box">
                                        <span className="project-category">Caso de Éxito</span>
                                        <h3>{proyecto.title}</h3>
                                        <p>{proyecto.description}</p>
                                        
                                        <a href="#contacto" className="project-link">
                                            Quiero algo similar <span className="arrow">➔</span>
                                        </a>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón Siguiente */}
                    <button className="slider-arrow next" onClick={nextSlide}>
                        &#10095;
                    </button>

                </div>

                {/* Indicadores (Puntitos) */}
                <div className="slider-dots">
                    {PROYECTOS_DATA.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
                
            </div>
        </section>
    );
};