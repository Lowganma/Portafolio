const links = [
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Stack', '#stack'],
  ['Experiencia', '#experiencia'],
  ['Contacto', '#contacto'],
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ir al inicio">
        <span className="brand-mark">W</span>
        <span>Williams Calzadilla</span>
      </a>
      <nav aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
