import { countries, medalTable } from "@/data/worlds";

export function MedalTable() {
  return (
    <div className="medal-table-wrap">
      <table className="medal-table">
        <caption className="sr-only">
          All-time Roundnet World Championship medal table through 2024
        </caption>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Country</th>
            <th scope="col" className="number gold-text">
              Gold
            </th>
            <th scope="col" className="number silver-text">
              Silver
            </th>
            <th scope="col" className="number bronze-text">
              Bronze
            </th>
            <th scope="col" className="number">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {medalTable.map((row, index) => {
            const country = countries[row.country];
            const total = row.gold + row.silver + row.bronze;
            return (
              <tr key={row.country}>
                <td className="rank-cell">{String(index + 1).padStart(2, "0")}</td>
                <th scope="row">
                  <span className="flag" aria-hidden="true">
                    {country.flag}
                  </span>
                  <span>{country.name}</span>
                  <small>{row.country}</small>
                </th>
                <td className="number medal-number gold-number">{row.gold}</td>
                <td className="number medal-number">{row.silver}</td>
                <td className="number medal-number">{row.bronze}</td>
                <td className="number total-number">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
