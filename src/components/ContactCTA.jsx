import React from "react";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { profile } from "../data/projects.js";

export function ContactCTA() {
  return (
    <section className="section contact-section">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Disponible para oportunidades profesionales y proyectos seleccionados.</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            {profile.email} <Mail size={18} />
          </a>
          <a className="button secondary" href={`https://wa.me/52${profile.whatsapp}`}>
            WhatsApp <Phone size={18} />
          </a>
          <a className="button secondary" href={profile.linkedinUrl}>
            LinkedIn <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
