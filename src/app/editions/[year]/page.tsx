import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChampionSquadRoster, PodiumEventBlock } from "@/components/podium";
import { ArrowIcon } from "@/components/site-shell";
import { editions } from "@/data/worlds";

type Props = { params: Promise<{ year: string }> };

export function generateStaticParams() {
  return editions.map((edition) => ({ year: String(edition.year) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  const edition = editions.find((item) => String(item.year) === year);
  if (!edition) return {};

  return {
    title: `${edition.year} podium`,
    description: `Every medal, player, team, and national squad from the ${edition.year} Roundnet World Championship in ${edition.location}.`,
    openGraph: {
      title: `${edition.year} Roundnet World Championship podium`,
      description: edition.dek,
      images: [{ url: edition.image, alt: edition.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${edition.year} Roundnet World Championship podium`,
      description: edition.dek,
      images: [edition.image],
    },
  };
}

export default async function EditionPage({ params }: Props) {
  const { year } = await params;
  const edition = editions.find((item) => String(item.year) === year);
  if (!edition) notFound();

  const otherEdition = editions.find((item) => item.year !== edition.year)!;

  return (
    <>
      <article className="edition-page">
        <header className="edition-hero shell">
          <div className="edition-hero-copy">
            <Link className="back-link" href="/">
              ← All editions
            </Link>
            <p className="eyebrow">
              World Championship <span>{edition.year}</span>
            </p>
            <h1>{edition.edition}</h1>
            <p className="edition-dek">{edition.dek}</p>
            <dl className="edition-facts">
              <div>
                <dt>When</dt>
                <dd>{edition.dates}</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>{edition.location}</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>{edition.venue}</dd>
              </div>
              <div>
                <dt>Titles</dt>
                <dd>5 world championships</dd>
              </div>
            </dl>
          </div>
          <figure className="edition-hero-figure">
            <Image
              src={edition.image}
              alt={edition.imageAlt}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 48vw"
            />
            <figcaption>
              <a href={edition.imageCreditUrl} target="_blank" rel="noreferrer">
                {edition.imageCredit} <ArrowIcon />
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="edition-story ruled-section">
          <div className="shell edition-story-grid">
            <p className="kicker">The edition in one minute</p>
            <p>{edition.story}</p>
          </div>
        </section>

        <section className="podiums-section shell" aria-labelledby="all-podiums">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Official medal record</p>
              <h2 id="all-podiums">Every {edition.year} podium</h2>
            </div>
            <p>
              Individual titles belong to two-player teams. Squad titles
              belong to nations competing through ranked team matchups.
            </p>
          </div>
          <div className="podium-events">
            {edition.events.map((event) => (
              <PodiumEventBlock event={event} key={event.id} />
            ))}
          </div>
        </section>

        <section className="squads-section ruled-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="kicker">Inside the gold</p>
                <h2>Championship squad rosters</h2>
              </div>
              <p>
                The United States won both national squad titles. These are the
                two-player teams listed on the championship rosters.
              </p>
            </div>
            <div className="squad-rosters">
              {edition.championSquads.map((squad) => (
                <ChampionSquadRoster squad={squad} key={squad.label} />
              ))}
            </div>
          </div>
        </section>

        <section className="edition-sources shell">
          <div>
            <p className="kicker">Keep the receipts</p>
            <h2>Edition sources</h2>
          </div>
          <ul>
            {edition.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label} <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <aside className="next-edition ruled-section">
        <Link href={`/editions/${otherEdition.year}`} className="shell">
          <span>
            <small>Continue the archive</small>
            <strong>{otherEdition.year}</strong>
          </span>
          <span>
            {otherEdition.edition} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </aside>
    </>
  );
}
