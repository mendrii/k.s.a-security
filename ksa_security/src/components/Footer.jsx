import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y navegación */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            <span className="text-white">Compañía</span>
            <span className="text-cyan-400">Segura</span>
          </h2>
          
          <nav className="flex flex-wrap gap-4 text-sm">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Inicio</a>
            <span className="text-gray-400">|</span>
            <a href="#blog" className="text-white hover:text-cyan-400 transition-colors">Blog</a>
            <span className="text-gray-400">|</span>
            <a href="#pricing" className="text-white hover:text-cyan-400 transition-colors">Precios</a>
            <span className="text-gray-400">|</span>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">Nosotros</a>
            <span className="text-gray-400">|</span>
            <a href="#faq" className="text-white hover:text-cyan-400 transition-colors">FAQ</a>
            <span className="text-gray-400">|</span>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>
          
          <p className="text-xs text-gray-400 pt-4">
            Compañía Segura © 2025
          </p>
        </div>

        {/* Información de contacto */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-white">Calle Principal 123</p>
              <p className="text-sm text-white">Ciudad de México, CDMX</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-white flex-shrink-0" />
            <a href="tel:+525555555555" className="text-white hover:text-cyan-400 transition-colors">
              +52 55.5555.5555
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-white flex-shrink-0" />
            <a href="mailto:contacto@seguridadpro.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              contacto@seguridadpro.com
            </a>
          </div>
        </div>

        {/* Sobre la empresa y redes sociales */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Sobre la empresa</h3>
          <p className="text-sm text-white leading-relaxed">
            Especialistas en instalaciones de sistemas de seguridad. 
            Ofrecemos cámaras de vigilancia, alarmas, control de acceso 
            y automatización para hogares y empresas. Tu seguridad es 
            nuestra prioridad.
          </p>
          
          <div className="flex gap-3 pt-2">
            <a 
              href="#facebook" 
              className="bg-gray-700 hover:bg-cyan-500 p-2.5 rounded transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#twitter" 
              className="bg-gray-700 hover:bg-cyan-500 p-2.5 rounded transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#linkedin" 
              className="bg-gray-700 hover:bg-cyan-500 p-2.5 rounded transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#github" 
              className="bg-gray-700 hover:bg-cyan-500 p-2.5 rounded transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
