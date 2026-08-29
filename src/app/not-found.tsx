import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">
        Out of bounds <span>404</span>
      </p>
      <h1>No podium here.</h1>
      <p>The page you were looking for is outside the championship archive.</p>
      <Link className="button button-primary" href="/">
        Return to Worlds
      </Link>
    </section>
  );
}
