import React from "react";
import { installations } from "../data/projects.js";

export function InstallationShowcase() {
  return (
    <section className="section installation-section">
      <div className="section-inner section-heading">
        <div>
          <p className="eyebrow">En la calle</p>
          <h2>Instalaciones y aplicaciones reales</h2>
          <p className="page-copy">
            Registros de anuncios luminosos, rotulacion, fachadas y piezas instaladas en espacios comerciales.
          </p>
        </div>
      </div>
      <div className="installation-strip" aria-label="Instalaciones reales">
        {installations.map((item) => (
          <figure className="installation-card" key={item.title}>
            <img src={item.image} alt="" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
