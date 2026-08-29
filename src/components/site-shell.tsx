import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Roundnet Worlds archive home">
        <span className="brand-mark" aria-hidden="true">
          ●
        </span>
        <span>
          <strong>Roundnet Worlds</strong>
          <small>The podium archive</small>
        </span>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/#medals">Medals</Link>
        <Link href="/editions/2022">2022</Link>
        <Link href="/editions/2024">2024</Link>
        <Link href="/history">History</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="brand-mark footer-mark" aria-hidden="true">
          ●
        </span>
        <p>
          An independent, source-linked archive of the Roundnet World
          Championship podium.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/history#sources">Sources & credits</Link>
        <a
          href="https://www.roundnetfederation.org/"
          target="_blank"
          rel="noreferrer"
        >
          International Roundnet Federation ↗
        </a>
      </div>
    </footer>
  );
}

export function ArrowIcon() {
  return (
    <span aria-hidden="true" className="arrow-icon">
      ↗
    </span>
  );
}
