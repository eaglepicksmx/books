import React from "react";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Books inicio">
        <span className="brand-mark">B</span>
        <span>Books</span>
      </a>
      <nav className="main-nav" aria-label="Navegacion principal">
        <a href="/proyectos">Proyectos</a>
        <a href="/sobre-mi">Sobre mi</a>
        <a href="/experiencia">Experiencia</a>
        <a href="/contacto">Contacto</a>
        <a className="nav-cv" href="/cv-victor-ortuno.pdf" download>
          Descargar CV <Download size={16} />
        </a>
      </nav>
    </header>
  );
}
