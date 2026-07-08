import React from "react";

export function AboutSection({ compact = false }) {
  return (
    <section className="section about-section">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">Sobre Victor</p>
          <h2>Un perfil que une diseno, cliente y produccion.</h2>
        </div>
        <div className="about-copy">
          <p>
            Soy gestor empresarial con experiencia operativa en imprenta, diseno grafico aplicado, atencion a clientes, cotizacion, produccion y seguimiento de proyectos.
          </p>
          {!compact && (
            <p>
              Mi perfil combina criterio visual con ejecucion real, entendiendo materiales, tiempos, costos y necesidades del cliente. Trabajo mejor cuando una idea necesita volverse entregable, medible y clara para quien la va a aprobar o producir.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
