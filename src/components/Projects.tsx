import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <p className="section-kicker">Proyectos destacados</p>
      <h2>Experiencia aplicada en web, servidores y homelab.</h2>
      <div className="cards-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="card-header">
              <h3>{project.title}</h3>
              <span className="status">{project.status}</span>
            </div>
            <p>{project.description}</p>
            {'learnings' in project && project.learnings ? <p className="learning"><strong>Aprendizajes:</strong> {project.learnings.join(', ')}.</p> : null}
            <div className="badges">
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            {project.url ? <a className="inline-link" href={project.url} target="_blank" rel="noreferrer">Ver proyecto →</a> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
