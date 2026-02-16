import React from 'react';
import '../style/Beneficios.css';


// Datos de los beneficios (puedes moverlos a un archivo aparte si prefieres después)
const BENEFITS_DATA = [
    {
        id: 1,
        title: "Integración Tecnológica",
        description: "No instalamos equipos aislados. Creamos ecosistemas donde cámaras, control de acceso y alarmas trabajan como una sola unidad inteligente.",
        // Ícono SVG de engranajes/conexión
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-2.79 1.52.53 2.85c.1.54-.25 1.07-.77 1.18l-3.13.67c-.14.03-.29.03-.43 0l-3-1.67-3 1.67c-.14.03-.29.03-.43 0l-3.13-.67c-.52-.11-.87-.64-.77-1.18l.53-2.85-2.79-1.52c-.32-.17-.53-.5-.53-.88v-3c0-.38.21-.71.53-.88l2.79-1.52-.53-2.85c-.1-.54.25-1.07.77-1.18l3.13-.67c.14-.03.29-.03.43 0l3 1.67 3-1.67c.14-.03.29-.03.43 0l3.13.67c.52.11.87.64.77 1.18l-.53 2.85 2.79 1.52c.32.17.53.5.53.88v3zM12 17c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
    },
    {
        id: 2,
        title: "Continuidad Operativa",
        description: "Priorizamos sistemas con respaldo de energía y redundancia. Tu seguridad no puede detenerse por un corte de luz o falla de internet.",
        // Ícono SVG de batería/energía
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 20h-8v-2h8v2zm2-4h-12v-10c0-1.1.9-2 2-2h2v-2h4v2h2c1.1 0 2 .9 2 2v10zm-6-9l-4 7h3l-1 4 5-7h-3l1-4z"/></svg>
    },
    {
        id: 3,
        title: "Soluciones Escalables",
        description: "Diseñamos pensando en el futuro. Tus sistemas quedan preparados para crecer fácilmente si tu edificio o empresa se expande.",
        // Ícono SVG de crecimiento/flecha
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
    },
    {
        id: 4,
        title: "Normativa y Certificación",
        description: "Todos nuestros proyectos de cerco eléctrico y seguridad cumplen estrictamente con la normativa SEC y estándares legales vigentes.",
        // Ícono SVG de certificado/escudo
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
    },
    {
        id: 5,
        title: "Post-Venta Proactiva",
        description: "No desaparecemos tras la instalación. Ofrecemos planes de mantención preventiva para evitar fallas antes de que ocurran.",
        // Ícono SVG de herramientas/soporte
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
    },
    {
        id: 6,
        title: "Capacitación a Usuarios",
        description: "La tecnología debe ser fácil de usar. Entrenamos a conserjes y administradores para que saquen el máximo provecho al sistema.",
        // Ícono SVG de personas/usuario
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
    }
];

export const Beneficios = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                {/* Reutilizamos tus estilos de título */}
                <h2 className="benefits-title left-aligned">
                    NUESTROS <br />
                    <span className="highlight">BENEFICIOS CLAVE</span>
                </h2>

                <div className="benefits-grid">
                    {BENEFITS_DATA.map((benefit) => (
                        <div key={benefit.id} className="benefit-card">
                            <div className="benefit-icon">
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};