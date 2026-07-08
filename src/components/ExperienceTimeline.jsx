import React from "react";

const experience = [
  {
    period: "Operacion grafica",
    title: "Cotizacion, seguimiento y produccion",
    text: "Atencion a necesidades del cliente, calculo de materiales, preparacion de archivos y coordinacion de entregables impresos."
  },
  {
    period: "Diseno aplicado",
    title: "Identidad, papeleria, empaque y redes",
    text: "Creacion de piezas visuales listas para uso real, considerando formatos, acabados, legibilidad y consistencia de marca."
  },
  {
    period: "Gestion empresarial",
    title: "Orden operativo y servicio",
    text: "Seguimiento de proyectos, comunicacion clara con clientes y toma de decisiones con base en tiempo, costo y resultado."
  }
];

export function ExperienceTimeline({ expanded = false }) {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">Experiencia</p>
        <h2>{expanded ? "Trayectoria y responsabilidades" : "Experiencia orientada a entrega"}</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
