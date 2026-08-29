import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/site-shell";
import { archiveSources } from "@/data/worlds";

export const metadata: Metadata = {
  title: "History of Worlds",
  description:
    "How the Roundnet World Championship grew from a postponed 2020 debut to a biennial global championship.",
};

const chapters = [
  {
    year: "2020",
    place: "Belgium",
    title: "The championship that had to wait",
    copy: "The first World Championship was planned for Park Molenheide in Belgium. The COVID-19 pandemic pushed the debut back two years, but the venue and the ambition survived.",
    status: "Postponed",
  },
  {
    year: "2022",
    place: "Houthalen-Helchteren",
    title: "Worlds becomes real",
    copy: "The International Roundnet Federation staged the first official edition across five events. The United States swept every title; Switzerland, Austria, Canada, and Germany joined them on the podium.",
    status: "Completed",
  },
  {
    year: "2024",
    place: "Guildford",
    title: "Europe reaches the summit",
    copy: "Germany, Austria, and Switzerland captured the three individual crowns. The United States answered by defending both national squad titles, keeping its squad record perfect.",
    status: "Completed",
  },
  {
    year: "2026",
    place: "Paris",
    title: "The medal table moves again",
    copy: "Worlds heads to Parc du Tremblay from September 2–6. France arrives as the first host nation already on the all-time medal table, thanks to its 2024 women’s individual bronze.",
    status: "Upcoming",
  },
];

export default function HistoryPage() {
  return (
    <article className="history-page">
      <header className="history-hero shell">
        <div>
          <Link className="back-link" href="/">
            ← Back to the archive
          </Link>
          <p className="eyebrow">
            A young tradition <span>One global stage</span>
          </p>
          <h1>How Worlds got here.</h1>
          <p>
            Roundnet’s senior international championship is only two editions
            old. It already has a delayed beginning, a dominant first dynasty,
            and a European breakthrough.
          </p>
        </div>
        <figure>
          <Image
            src="/images/worlds-2022-community.webp"
            alt="Spain's national roundnet delegation poses together at the 2022 World Championship"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 48vw"
          />
          <figcaption>
            Spain at the inaugural Worlds. Corentin Bureau / IRF.
          </figcaption>
        </figure>
      </header>

      <section className="history-timeline ruled-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Four markers</p>
              <h2>A brief history</h2>
            </div>
            <p>
              Worlds has followed a biennial rhythm since the delayed inaugural
              championship reached the field in 2022.
            </p>
          </div>
          <ol>
            {chapters.map((chapter) => (
              <li key={chapter.year}>
                <div className="timeline-year">{chapter.year}</div>
                <div className="timeline-place">
                  <span>{chapter.status}</span>
                  <strong>{chapter.place}</strong>
                </div>
                <div className="timeline-copy">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="format-section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">How a title is won</p>
            <h2>Two ways to become world champion</h2>
          </div>
          <p>
            Worlds separates two-player excellence from the depth of a full
            national program.
          </p>
        </div>
        <div className="format-grid">
          <article>
            <span className="format-number">01</span>
            <p className="kicker">Three titles</p>
            <h3>Individual championship</h3>
            <p>
              Men’s, women’s, and mixed two-player teams move from pool play
              into a knockout bracket. Teammates can face another pair from the
              same nation. The winning pair owns the title.
            </p>
          </article>
          <article>
            <span className="format-number">02</span>
            <p className="kicker">Two titles</p>
            <h3>National squad championship</h3>
            <p>
              Ranked pairs compete as one men’s or women’s national squad.
              Corresponding teams face each other, and the first country to win
              a majority of matchups advances.
            </p>
          </article>
        </div>
      </section>

      <section className="trophy-story ruled-section">
        <div className="shell trophy-story-grid">
          <figure>
            <Image
              src="/images/worlds-trophy.jpg"
              alt="The reflective globe at the top of the Roundnet World Championship trophy"
              fill
              sizes="(max-width: 860px) 100vw, 44vw"
            />
          </figure>
          <div>
            <p className="kicker">The object</p>
            <h2>A world, turned upside down.</h2>
            <p>
              The trophy is topped by a polished globe that reflects the field,
              crowd, and horizon upside down. Spikeball’s original design brief
              asked for something iconic, quirky, sturdy, and unmistakably part
              of roundnet culture. The finished object does exactly that.
            </p>
            <a
              className="text-link"
              href="https://spikeball.com/pages/worlds-trophy"
              target="_blank"
              rel="noreferrer"
            >
              Read the original trophy brief <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sources-section shell" id="sources">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Sources & credits</p>
            <h2>Built to be checked.</h2>
          </div>
          <p>
            Podiums and rosters are drawn from IRF event records, official
            Fwango-linked results, and the community-maintained Spike Wiki.
          </p>
        </div>
        <ul>
          {archiveSources.map((source, index) => (
            <li key={source.url}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.label} <ArrowIcon />
              </a>
            </li>
          ))}
        </ul>
        <p className="source-note">
          Photography shown from IRF pages is credited there to Corentin Bureau,
          Ruwen Schroeder, and Pierre Staub. The trophy still is from the
          ROUNDNETWORK documentary presented by Spikeball. This independent
          archive is not an official IRF publication.
        </p>
      </section>
    </article>
  );
}
