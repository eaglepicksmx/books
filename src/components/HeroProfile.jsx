import React from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/projects.js";

export function HeroProfile() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Perfil profesional</p>
        <h1>{profile.displayName}</h1>
        <p className="hero-title">Diseno grafico · Produccion impresa · Gestion operativa</p>
        <p className="hero-text">
          {profile.bio}
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/proyectos">
            Ver proyectos <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="/cv-victor-ortuno.pdf" download>
            Descargar CV <Download size={18} />
          </a>
          <a className="button quiet" href="/contacto">
            Contactar <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="profile-panel" aria-label="Resumen de perfil">
        <div className="profile-art photo">
          <img src={profile.image} alt="" />
        </div>
        <div className="profile-stats">
          <div>
            <strong>{profile.location}</strong>
            <span>base profesional</span>
          </div>
          <div>
            <strong>{profile.experience}</strong>
            <span>diseno, produccion y clientes</span>
          </div>
          <div>
            <strong>Operacion</strong>
            <span>cliente, cotizacion y seguimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
}
