import { useState } from "react";
import maps from "../../../data/geo/maps.json";
import places from "../../../data/places.json";
import { useInView } from "../../../utils/useInView";
import "./workmap.css";

// One question per view, one unit (the city) everywhere
const VIEWS = ["work", "visits", "team"];

const STATE_NAMES = Object.fromEntries(maps.mexico.states.map((s) => [s.id, s.name]));
const countryOf = (region) => (region.startsWith("MX-") ? "MX" : region);

// Merge points that would overlap on screen (e.g. CDMX, Naucalpan and Atizapán) into one dot
const cluster = (points, radius) => {
  const groups = [];
  points.forEach((p) => {
    const near = groups.find((g) => Math.hypot(g.x - p.x, g.y - p.y) < radius);
    if (near) near.items.push(p);
    else groups.push({ x: p.x, y: p.y, items: [p] });
  });
  return groups.map((g) => {
    // Dot color: on-site (blue) / remote (white); a group with both shows half and half
    const kinds = [...new Set(g.items.map((i) => i.kind).filter(Boolean))];
    return { ...g, key: g.items.map((i) => i.city).join("+"), kind: kinds.length > 1 ? "mixed" : kinds[0] || "onsite" };
  });
};

const MapFigure = ({ map, entries, radius, caption, active, onSelect, label, only, collapseMexico }) => {
  const inFrame = ([x, y]) => x >= 0 && y >= 0 && x <= map.width && y <= map.height;
  const points = entries
    .filter((e) => (!only || only(e)) && map.points[e.city] && inFrame(map.points[e.city]))
    .map((e) => ({ ...e, x: map.points[e.city][0], y: map.points[e.city][1] }));
  // At continent scale all Mexican cities pile up, so they become a single dot at Mexico City
  const [cx, cy] = map.points.cdmx;
  const placed = collapseMexico
    ? points.map((p) => (p.region.startsWith("MX-") ? { ...p, x: cx, y: cy } : p))
    : points;
  const regions = map.states || map.countries;
  return (
    <figure className="work-map-figure">
      <svg viewBox={`0 0 ${map.width} ${map.height}`} role="group" aria-label={caption}>
        {regions.map((r) => <path key={r.id} d={r.d} className="map-region" />)}
        {cluster(placed, radius).map((g) => (
          <g
            key={g.key}
            className={`map-dot kind-${g.kind} ${active === g.key ? "is-active" : ""}`}
            transform={`translate(${g.x} ${g.y})`}
            tabIndex={0}
            role="button"
            aria-label={g.items.map((i) => label(i)).join("; ")}
            onMouseEnter={() => onSelect(g)}
            onFocus={() => onSelect(g)}
            onClick={() => onSelect(g)}
          >
            <circle className="map-dot-hit" r="10" />
            <circle className="map-dot-ring" r={g.items.length > 1 ? 7.5 : 6} />
            {g.kind === "mixed" ? (
              <>
                <path className="map-dot-half kind-onsite" d="M0 -3.5 A3.5 3.5 0 0 0 0 3.5 Z" />
                <path className="map-dot-half kind-remote" d="M0 -3.5 A3.5 3.5 0 0 1 0 3.5 Z" />
              </>
            ) : <circle className="map-dot-core" r="3.5" />}
          </g>
        ))}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export const WorkMap = ({ t }) => {
  const m = t.experience.map;
  const [ref, visible] = useInView();
  const [view, setView] = useState(VIEWS[0]);
  const [active, setActive] = useState(null);
  const entries = places.views[view];

  const regionName = (region) => (region.startsWith("MX-") ? STATE_NAMES[region] : m.countries[region]);
  const place = (e) => {
    // "Puebla, Puebla" on purpose: the city and its state share a name; only Mexico City is both at once
    const city = m.cities[e.city];
    return e.region === "MX-DIF" ? city : `${city}, ${regionName(e.region)}`;
  };
  // "Presencial (híbrido)": the note qualifies the kind when both exist
  const how = (e) => (e.kind && e.note ? `${m.kinds[e.kind]} (${m.notes[e.note]})` : (e.kind && m.kinds[e.kind]) || (e.note && m.notes[e.note]));
  const what = (e) => [e.companies && e.companies.join(", "), how(e)].filter(Boolean).join(" · ");
  const kindCount = (k) => entries.filter((e) => e.kind === k).length;
  const hasKinds = entries.some((e) => e.kind);
  const label = (e) => [place(e), what(e)].filter(Boolean).join(" — ");

  const countries = [...new Set(entries.map((e) => countryOf(e.region)))];
  const n = entries.length;
  const summary = `${n} ${n === 1 ? m.cityOne : m.cityMany} ${m.inOne} ${
    countries.length === 1 ? m.countries[countries[0]] : `${countries.length} ${m.countryMany}`
  }`;

  const selectView = (v) => { setView(v); setActive(null); };

  return (
    <div ref={ref} className={`work-map fade-up ${visible ? "visible" : ""}`}>
      <h3 className="work-map-title">{m.title}</h3>

      <div className="work-map-tabs" role="tablist" aria-label={m.title}>
        {VIEWS.map((v) => (
          <button
            key={v}
            role="tab"
            aria-selected={view === v}
            className={view === v ? "is-active" : ""}
            onClick={() => selectView(v)}
          >
            {m.views[v].tab}
          </button>
        ))}
      </div>

      <p className="work-map-desc">{m.views[view].desc} <span>{summary}</span></p>
      {hasKinds && (
        <p className="work-map-kinds">
          {["onsite", "remote"].map((k) => (
            <span key={k}><i className={`kind-swatch kind-${k}`} />{m.kinds[k]} ({kindCount(k)})</span>
          ))}
        </p>
      )}

      <div className="work-map-grid" onMouseLeave={() => setActive(null)}>
        <MapFigure map={maps.mexico} entries={entries} radius={8} caption={m.mexico}
          active={active?.key} onSelect={setActive} label={label} only={(e) => e.region.startsWith("MX-")} />
        <MapFigure map={maps.americas} entries={entries} radius={6} caption={m.americas}
          active={active?.key} onSelect={setActive} label={label} collapseMexico />
      </div>

      <div className="work-map-detail" aria-live="polite">
        {active ? active.items.map((i) => (
          <p key={i.city}><strong>{place(i)}</strong>{what(i) && ` — ${what(i)}`}</p>
        )) : <p>{m.hint}</p>}
      </div>

      {/* Text version of the current view (also what screen readers get) */}
      <ul className="work-map-list">
        {entries.map((e) => (
          <li key={e.city}>
            {e.kind && <i className={`kind-swatch kind-${e.kind}`} />}
            <strong>{place(e)}</strong>{what(e) && <span> — {what(e)}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
