import React from "react";
import { ArrowLeft, ArrowRight, Download, Mail } from "lucide-react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HeroProfile } from "./components/HeroProfile.jsx";
import { ProjectGrid } from "./components/ProjectGrid.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ExperienceTimeline } from "./components/ExperienceTimeline.jsx";
import { SkillPills } from "./components/SkillPills.jsx";
import { ContactCTA } from "./components/ContactCTA.jsx";
import { InstallationShowcase } from "./components/InstallationShowcase.jsx";
import { profile, projects, skills } from "./data/projects.js";

function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function LinkButton({ href, children, variant = "primary", icon }) {
  return (
    <a className={`button ${variant}`} href={href}>
      {children}
      {icon}
    </a>
  );
}

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <HeroProfile />
      <section className="section intro-band" aria-label="Idea central">
        <div className="section-inner split-intro">
          <p className="eyebrow">Books</p>
          <h2>Tu trabajo convertido en evidencia profesional.</h2>
          <p>
            Una seleccion clara de proyectos, experiencia y capacidades reales para evaluar como Victor resuelve necesidades visuales, tecnicas y operativas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner section-heading">
          <div>
            <p className="eyebrow">Proyectos destacados</p>
            <h2>Evidencia de trabajo aplicado</h2>
          </div>
          <LinkButton href="/proyectos" variant="quiet" icon={<ArrowRight size={18} />}>
            Ver todos
          </LinkButton>
        </div>
        <ProjectGrid projects={featured} />
      </section>

      <AboutSection compact />
      <InstallationShowcase />
      <ExperienceTimeline />
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Habilidades</p>
          <h2>Criterio visual con control de produccion</h2>
          <SkillPills skills={skills} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-inner section-heading">
          <div>
            <p className="eyebrow">Proyectos</p>
            <h1>Casos seleccionados</h1>
            <p className="page-copy">
              Trabajos organizados por necesidad, proceso y resultado. Cada proyecto muestra que se pidio, que se resolvio y con que herramientas.
            </p>
          </div>
        </div>
        <ProjectGrid projects={projects} />
      </section>
      <InstallationShowcase />
    </>
  );
}

function ProjectDetailPage({ slug }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section page-top">
        <div className="section-inner narrow">
          <p className="eyebrow">Proyecto</p>
          <h1>No encontre este proyecto</h1>
          <p className="page-copy">La direccion no coincide con ningun caso publicado.</p>
          <LinkButton href="/proyectos" icon={<ArrowLeft size={18} />}>Volver a proyectos</LinkButton>
        </div>
      </section>
    );
  }

  return (
    <article className="project-detail">
      <section className="section page-top">
        <div className="section-inner detail-hero">
          <div>
            <p className="eyebrow">{project.category} - {project.year}</p>
            <h1>{project.title}</h1>
            <p className="page-copy">{project.shortDescription}</p>
          </div>
          <img src={project.coverImage} alt="" className="detail-cover" />
        </div>
      </section>

      <section className="section">
        <div className="section-inner detail-grid">
          <div className="detail-panel">
            <h2>Problema o necesidad</h2>
            <p>{project.problem}</p>
          </div>
          <div className="detail-panel">
            <h2>Solucion propuesta</h2>
            <p>{project.solution}</p>
          </div>
          <div className="detail-panel">
            <h2>Proceso</h2>
            <p>{project.process}</p>
          </div>
          <div className="detail-panel">
            <h2>Resultado</h2>
            <p>{project.result}</p>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-inner meta-grid">
          <div>
            <p className="eyebrow">Rol</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">Herramientas</p>
            <SkillPills skills={project.tools} small />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Galeria</p>
          <div className="gallery-grid">
            {project.gallery.map((image) => (
              <img key={image} src={image} alt="" />
            ))}
          </div>
          <div className="back-row">
            <LinkButton href="/proyectos" variant="secondary" icon={<ArrowLeft size={18} />}>
              Volver a proyectos
            </LinkButton>
          </div>
        </div>
      </section>
    </article>
  );
}

function AboutPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-inner narrow">
          <p className="eyebrow">Sobre mi</p>
          <h1>Diseno, produccion y seguimiento con los pies en la operacion.</h1>
          <p className="page-copy">
            Mi trabajo conecta el criterio visual con la realidad de materiales, tiempos, costos, proveedores y clientes.
          </p>
        </div>
      </section>
      <AboutSection />
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Habilidades</p>
          <SkillPills skills={skills} />
        </div>
      </section>
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-inner narrow">
          <p className="eyebrow">Experiencia</p>
          <h1>Experiencia practica en imprenta, diseno aplicado y atencion a clientes.</h1>
          <p className="page-copy">
            Un perfil orientado a resolver, cotizar, producir, entregar y dar seguimiento con claridad.
          </p>
        </div>
      </section>
      <ExperienceTimeline expanded />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-inner narrow">
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos de una oportunidad o proyecto.</h1>
          <p className="page-copy">
            Disponible para roles y colaboraciones donde el diseno necesite criterio operativo, orden y seguimiento.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Contactar <Mail size={18} />
            </a>
            <a className="button secondary" href="/cv-victor-ortuno.pdf" download>
              Descargar CV <Download size={18} />
            </a>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

function Router() {
  const path = getPath();

  if (path === "/" || path === "/victor" || path === "/victor-ortuno") return <HomePage />;
  if (path === "/proyectos") return <ProjectsPage />;
  if (path.startsWith("/proyectos/")) return <ProjectDetailPage slug={path.split("/").pop()} />;
  if (path === "/sobre-mi") return <AboutPage />;
  if (path === "/experiencia") return <ExperiencePage />;
  if (path === "/contacto") return <ContactPage />;
  return <HomePage />;
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}
