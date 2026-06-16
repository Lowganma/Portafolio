import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experiencia" className="section two-column">
      <div>
        <p className="section-kicker">Experiencia</p>
        <h2>Trabajo orientado a datos, contenido digital y administración.</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <span className="timeline-dot" />
            <h3>{item.company}</h3>
            <p className="role">{item.role}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
