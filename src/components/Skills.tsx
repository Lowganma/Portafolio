import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="stack" className="section">
      <p className="section-kicker">Stack técnico</p>
      <h2>Herramientas que uso para construir, probar y desplegar.</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="panel" key={group.category}>
            <h3>{group.category}</h3>
            <div className="badges">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
