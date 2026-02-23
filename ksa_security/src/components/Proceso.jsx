import React from 'react';
import '../style/Proceso.css';

const PASOS = [
    {
        numero: "01",
        titulo: "Contacto Inicial",
        descripcion: "Hablamos sobre tus necesidades de seguridad y te orientamos sobre las mejores tecnologías disponibles."
    },
    {
        numero: "02",
        titulo: "Visita Técnica Certificada",
        descripcion: "Un técnico experto evalúa tu propiedad en terreno (factibilidad, puntos ciegos y cableado) para diseñar un sistema 100% a medida."
    },
    {
        numero: "03",
        titulo: "Instalación Prolija",
        descripcion: "Ejecutamos el proyecto cuidando la estética de tu fachada, sin cables a la vista y cumpliendo toda la normativa SEC."
    },
    {
        numero: "04",
        titulo: "Capacitación y Post-Venta",
        descripcion: "No damos el trabajo por terminado hasta que sepas controlar todo desde tu celular con total facilidad. Todo esto, respaldado por nuestra garantía y soporte técnico de primer nivel."
    }
];

export const Proceso = () => {
    return (
        <section className="proceso-section">
            <div className="proceso-container">
                <div className="proceso-header">
                    <h2>NUESTRO <span className="highlight">MÉTODO DE TRABAJO</span></h2>
                    <p>Seguridad sin improvisaciones. Así garantizamos un resultado perfecto.</p>
                </div>

                <div className="proceso-grid">
                    {PASOS.map((paso, index) => (
                        <div key={index} className="paso-card">
                            <div className="paso-numero">{paso.numero}</div>
                            <h3>{paso.titulo}</h3>
                            <p>{paso.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};