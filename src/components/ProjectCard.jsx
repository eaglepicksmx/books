import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <a className="project-card" href={`/proyectos/${project.slug}`}>
      <img src={project.coverImage} alt="" />
      <div className="project-card-body">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.shortDescription}</p>
        <span className="card-link">
          Ver caso <ArrowUpRight size={17} />
        </span>
      </div>
    </a>
  );
}
