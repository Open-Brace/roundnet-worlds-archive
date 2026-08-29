import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/site-shell";
import { MedalTable } from "@/components/medal-table";
import {
  countries,
  editions,
  reigningIndividualChampions,
} from "@/data/worlds";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            The complete Worlds medal record <span>2022—2024</span>
          </p>
          <h1>
            The world
            <br />
            around one net.
          </h1>
          <p className="hero-dek">
            Every world title, podium nation, player, and championship squad
            from roundnet’s biggest stage.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#medals">
              Explore the medal table <span aria-hidden="true">↓</span>
            </Link>
            <Link className="text-link" href="/history">
              Read the story of Worlds <ArrowIcon />
            </Link>
          </div>
          <dl className="hero-stats" aria-label="Archive summary">
            <div>
              <dt>02</dt>
              <dd>Completed editions</dd>
            </div>
            <div>
              <dt>10</dt>
              <dd>World titles awarded</dd>
            </div>
            <div>
              <dt>06</dt>
              <dd>Medalling nations</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <div className="hero-image-frame">
            <Image
              src="/images/worlds-trophy.jpg"
              alt="The Roundnet World Championship trophy, a reflective globe above a circular metal base"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 52vw"
            />
            <span className="image-index">OBJECT 001</span>
          </div>
          <figcaption>
            <span>The Worlds trophy</span>
            <a
              href="https://www.youtube.com/watch?v=eEI1QaPPWNc"
              target="_blank"
              rel="noreferrer"
            >
              Frame: ROUNDNETWORK documentary <ArrowIcon />
            </a>
          </figcaption>
        </figure>
      </section>

      <section className="medals-section ruled-section" id="medals">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">All-time table</p>
              <h2>Ten titles. Thirty podium places.</h2>
            </div>
            <p>
              The United States has won every squad championship. Europe owns
              the three reigning individual titles.
            </p>
          </div>
          <MedalTable />
          <p className="table-note">
            Counts include the men’s, women’s, and mixed individual podiums,
            plus the men’s and women’s national squad podiums. Updated through
            Guildford 2024.
          </p>
        </div>
      </section>

      <section className="champions-section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">The holders</p>
            <h2>Reigning individual champions</h2>
          </div>
          <Link className="text-link" href="/editions/2024">
            Full 2024 podium <ArrowIcon />
          </Link>
        </div>
        <div className="champion-layout">
          <figure className="champion-photo">
            <Image
              src="/images/worlds-2024-champions.webp"
              alt="Laura Kunzelmann of Switzerland is congratulated after competition at Worlds 2024"
              fill
              sizes="(max-width: 860px) 100vw, 46vw"
            />
            <figcaption>
              Laura Kunzelmann, 2024 mixed world champion. Photo via IRF.
            </figcaption>
          </figure>
          <ol className="champion-list">
            {reigningIndividualChampions.map((champion, index) => {
              const country = countries[champion.country];
              return (
                <li key={champion.event}>
                  <span className="champion-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="kicker">{champion.event}</p>
                    <h3>{champion.team}</h3>
                    <p>{champion.players?.join(" · ")}</p>
                  </div>
                  <span className="champion-country">
                    <span aria-hidden="true">{country.flag}</span>
                    {country.shortName}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="editions-section ruled-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Edition by edition</p>
              <h2>The podium lines</h2>
            </div>
            <p>
              Two championships already tell two very different stories.
            </p>
          </div>
          <div className="edition-cards">
            {editions.map((edition) => (
              <article className="edition-card" key={edition.year}>
                <Link href={`/editions/${edition.year}`} className="edition-image-link">
                  <Image
                    src={edition.image}
                    alt={edition.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span>{edition.year}</span>
                </Link>
                <div className="edition-card-copy">
                  <p className="kicker">
                    {edition.flag} {edition.location}
                  </p>
                  <h3>{edition.edition}</h3>
                  <p>{edition.dek}</p>
                  <Link className="text-link" href={`/editions/${edition.year}`}>
                    See every podium <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="next-worlds shell" aria-labelledby="next-worlds-title">
        <div className="next-worlds-image">
          <Image
            src="/images/worlds-2024-france.webp"
            alt="French roundnet supporters celebrate together at an international event"
            fill
            sizes="(max-width: 860px) 100vw, 44vw"
          />
        </div>
        <div className="next-worlds-copy">
          <p className="eyebrow">
            Next stop <span>Paris 2026</span>
          </p>
          <h2 id="next-worlds-title">The third chapter lands in France.</h2>
          <p>
            Parc du Tremblay will host the next World Championship from
            September 2–6, 2026. The medal table above is the record everyone
            arrives trying to change.
          </p>
          <a
            className="button button-dark"
            href="https://www.roundnetfederation.org/worlds2026/about"
            target="_blank"
            rel="noreferrer"
          >
            Visit Worlds 2026 <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
