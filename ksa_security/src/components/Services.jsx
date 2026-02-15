import React from 'react';
import { SERVICES, WHATSAPP_NUMBER } from '../data/constants';
import '../style/Services.css';

export const Services = () => {
    const securityServices = SERVICES.filter(s => s.category === 'Seguridad');
    const connectivityServices = SERVICES.filter(s => s.category === 'Conectividad');

    const ServiceCard = ({ service }) => (
        <div key={service.id} className="service-card">
            <div className="service-image">
                <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, estoy interesado en el servicio: ${encodeURIComponent(service.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="service-button"
                >
                    COTIZAR SERVICIO
                </a>
            </div>
        </div>
    );

    return (
        <section id="servicios" className="services-section">
            <div className="services-container">
                <h2 className="services-title left-aligned">
                    SEGURIDAD PARA TU <br />
                    <span className="highlight">HOGAR Y COMUNIDAD</span>
                </h2>

                {/* Categoría: Seguridad */}
                <div className="services-grid">
                    {securityServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Categoría: Conectividad y Tecnología */}
                <h2 className="services-title left-aligned">
                    CONECTIVIDAD Y <span className="highlight">TECNOLOGÍA</span>
                </h2>
                <div className="services-grid">
                    {connectivityServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}

                    {/* Sección adicional en azul */}
                    <div className="extra-section services-grid service-card">
                        <h2>¿NECESITAS ALGO MÁS?</h2>
                        <p>Desarrollamos proyectos tecnológicos a medida para edificios y empresas.</p>
                        <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, estoy interesado en desarrollar un proyecto tecnológico a medida.`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="extra-button"
                        >
                            CONSULTA TÉCNICA
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};