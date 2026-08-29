import {
  countries,
  medalLabels,
  type ChampionSquad,
  type PodiumEvent,
} from "@/data/worlds";

export function CountryLabel({ code }: { code: keyof typeof countries }) {
  const country = countries[code];
  return (
    <span className="country-label">
      <span aria-hidden="true">{country.flag}</span>
      {country.name}
    </span>
  );
}

export function PodiumEventBlock({ event }: { event: PodiumEvent }) {
  return (
    <article className="podium-event" id={event.id}>
      <header className="podium-event-header">
        <p className="kicker">{event.kind === "individual" ? "Two-player team" : "National title"}</p>
        <h2>{event.label}</h2>
      </header>
      <ol className="podium-list">
        {event.podium.map((finish) => {
          const medal = medalLabels[finish.place];
          return (
            <li className={`podium-finish ${finish.place}`} key={finish.place}>
              <div className="finish-rank">
                <span>{medal.rank}</span>
                <small>{medal.label}</small>
              </div>
              <div className="finish-team">
                <CountryLabel code={finish.country} />
                <strong>{finish.team ?? countries[finish.country].name}</strong>
                {finish.players && <p>{finish.players.join(" · ")}</p>}
              </div>
              <span className="medal-disc" aria-label={`${medal.label} medal`} />
            </li>
          );
        })}
      </ol>
    </article>
  );
}

export function ChampionSquadRoster({ squad }: { squad: ChampionSquad }) {
  return (
    <article className="squad-roster">
      <header>
        <span aria-hidden="true">🇺🇸</span>
        <div>
          <p className="kicker">Gold medal roster</p>
          <h3>{squad.label}</h3>
        </div>
      </header>
      <ol>
        {squad.teams.map((team, index) => (
          <li key={team.team}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{team.team}</strong>
              <p>{team.players.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
