import React, { useState, useEffect } from 'react';
import '../style/Proyectos.css'; 
import { PROYECTOS_DATA } from '../data/proyect_data'; // Importamos los datos

// Subcomponente: El Carrusel Automático
const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Animación automática cada 3 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer); // Limpieza del intervalo
    }, [images.length]);

    return (
        <div className="project-carousel">
            <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Vista ${idx + 1}`} />
                ))}
            </div>
            {/* Puntitos indicadores del carrusel */}
            <div className="carousel-indicators">
                {images.map((_, idx) => (
                    <span 
                        key={idx} 
                        className={`dot ${currentIndex === idx ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export const Proyectos = () => {
    return (
        <section id="proyectos" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title left-aligned">
                    PROYECTOS <br />
                    <span className="highlight">REALIZADOS</span>
                </h2>

                <div className="projects-grid">
                    {PROYECTOS_DATA.map((proyecto) => (
                        <div key={proyecto.id} className="project-card">
                            {/* Integramos el carrusel en lugar de una imagen estática */}
                            <ImageCarousel images={proyecto.images} />
                            
                            <div className="project-content">
                                <h3>{proyecto.title}</h3>
                                <p>{proyecto.description}</p>
                                <div className="project-decoration">
                                    <span className="decoration-line"></span>
                                    <span className="decoration-text">✓ Proyecto Completado</span>
                                    <span className="decoration-line"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};