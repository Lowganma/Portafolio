export function Hero() {
  return (
    <section id="top" className="hero section-grid">
      <div className="hero-copy">
        <p className="eyebrow">Disponible para oportunidades junior y soporte técnico</p>
        <h1>Williams Calzadilla</h1>
        <h2>Ingeniero de Sistemas | Desarrollador Web | Homelab & Linux Enthusiast</h2>
        <p className="hero-text">Construyo soluciones web, automatizo servicios y administro infraestructura casera con Linux, Docker y Cloudflare.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
          <a className="btn btn-secondary" href="https://cv.lowganma.site" target="_blank" rel="noreferrer">Descargar CV</a>
          <a className="btn btn-ghost" href="mailto:williams.cz1998@gmail.com">Contactar</a>
        </div>
      </div>
      <aside className="terminal-card" aria-label="Resumen técnico">
        <div className="terminal-dots"><span /> <span /> <span /></div>
        <code>$ whoami</code>
        <strong>systems-engineer-junior</strong>
        <code>$ services --focus</code>
        <p>React · TypeScript · MySQL · Linux · Docker · Cloudflare Tunnel</p>
        <code>$ location</code>
        <p>Maturín, Monagas, Venezuela</p>
      </aside>
    </section>
  );
}
