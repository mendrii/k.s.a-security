import React, { useState } from 'react';
import '../style/Navbar.css';

const Navbar = () => {
    // 1. Estado para controlar si el menú móvil está abierto
    const [isOpen, setIsOpen] = useState(false);

    // 2. Función para alternar entre abierto/cerrado
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 3. Función para cerrar el menú automáticamente al hacer clic en un enlace
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* LOGO */}
                <div className="nav-logo">
                    <img src="/img/ksalogo.png" alt="K.S.A Security" />
                </div>

                {/* ENLACES Y BOTÓN */}
                {/* 4. Agregamos la clase 'active' dinámicamente si el estado es true */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#inicio" onClick={closeMenu}>INICIO</a>
                    <a href="#servicios" onClick={closeMenu}>NUESTROS SERVICIOS</a>
                    <a href="#ubicacion" onClick={closeMenu}>UBICACIÓN</a>
                    <a href="#nosotros" onClick={closeMenu}>NOSOTROS</a>
                    <a href="#proyectos" onClick={closeMenu}>PROYECTOS</a>
                    <a href="#contacto" className="btn-contacto" onClick={closeMenu}>CONTACTO</a>
                </div>

                {/* BOTÓN MENÚ MÓVIL (Símbolo de hamburguesa) */}
                {/* 5. Conectamos el botón a la función toggleMenu */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {/* Un toque extra: cambiamos el icono a una 'X' si el menú está abierto */}
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;