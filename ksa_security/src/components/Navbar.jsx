import '../style/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* LOGO */}
                <div className="nav-logo">
                    <img src="/img/logo_ksa.png" alt="K.S.A Security" />
                </div>

                {/* ENLACES Y BOTÓN */}
                <div className="nav-links">
                    <a href="#inicio">INICIO</a>
                    <a href="#servicios">NUESTROS SERVICIOS</a>
                    <a href="#ubicacion">UBICACIÓN</a>
                    <a href="#nosotros">NOSOTROS</a>
                    <a href="#proyectos">PROYECTOS</a>
                    <a href="#contacto" className="btn-contacto">CONTACTO</a>
                </div>

                {/* BOTÓN MENÚ MÓVIL (Símbolo de hamburguesa) */}
                <button className="mobile-menu-btn">
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;