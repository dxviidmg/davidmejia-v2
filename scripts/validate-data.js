// Checks the cross-references between the JSON files in src/data. Run: npm run validate:data
const fs = require("fs");
const path = require("path");

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../src/data", file), "utf8"));
const normalize = (name) => name.toLowerCase().replace(/[\s./]/g, "");

const organizations = read("organizations.json");
const positions = read("positions.json");
const projects = read("projects.json");
const skills = read("skills.json");
const places = read("places.json");
const certifications = read("certifications.json");
const i18n = { es: read("i18n/es.json"), en: read("i18n/en.json") };

const errors = [];
const check = (ok, message) => { if (!ok) errors.push(message); };

const DATE = /^\d{4}(-(0[1-9]|1[0-2]))?$/;
const checkDate = (value, where) => check(value === null || DATE.test(value), `${where}: date "${value}" is not YYYY or YYYY-MM`);
const keysOf = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) => (v && typeof v === "object" && !Array.isArray(v) ? keysOf(v, `${prefix}${k}.`) : [`${prefix}${k}`]));
const dupes = (list) => list.filter((x, i) => list.indexOf(x) !== i);

// Unique ids
dupes(positions.map((p) => p.id)).forEach((id) => errors.push(`positions: duplicate id "${id}"`));
dupes(projects.map((p) => p.id)).forEach((id) => errors.push(`projects: duplicate id "${id}"`));

// Organization references
const orgRef = (id, where) => check(organizations[id], `${where}: unknown organization "${id}"`);
positions.forEach((p) => orgRef(p.company, `positions.${p.id}`));
certifications.forEach((c) => orgRef(c.org, `certifications "${c.name}"`));
Object.entries(places.views).forEach(([view, list]) =>
  list.forEach((e) => (e.companies || []).forEach((id) => orgRef(id, `places.${view}.${e.city}`))));

// Dates
positions.forEach((p) => { checkDate(p.start, `positions.${p.id}.start`); checkDate(p.end, `positions.${p.id}.end`); });
projects.forEach((p) => { checkDate(p.start, `projects.${p.id}.start`); checkDate(p.end, `projects.${p.id}.end`); });
certifications.forEach((c) => checkDate(c.date, `certifications "${c.name}"`));
Object.entries(skills).forEach(([category, items]) =>
  items.forEach((s) => s.periods.forEach((p) => { checkDate(p.start, `skills.${s.name}.start`); checkDate(p.end, `skills.${s.name}.end`); })));

// Texts: every id has its translation in both languages, and es/en share the same keys
Object.entries(i18n).forEach(([lang, t]) => {
  positions.forEach((p) => check(t.experience.positions[p.id], `i18n.${lang}: missing experience.positions.${p.id}`));
  projects.forEach((p) => check(t.projects.items[p.id], `i18n.${lang}: missing projects.items.${p.id}`));
  Object.keys(t.experience.positions).forEach((id) => check(positions.some((p) => p.id === id), `i18n.${lang}: experience.positions.${id} has no position`));
  Object.keys(t.projects.items).forEach((id) => check(projects.some((p) => p.id === id), `i18n.${lang}: projects.items.${id} has no project`));
});
const es = new Set(keysOf(i18n.es));
const en = new Set(keysOf(i18n.en));
es.forEach((k) => check(en.has(k), `i18n: "${k}" is missing in en.json`));
en.forEach((k) => check(es.has(k), `i18n: "${k}" is missing in es.json`));

// Technology names: the same technology is always spelled like in skills.json
const spelling = Object.fromEntries(Object.values(skills).flat().map((s) => [normalize(s.name), s.name]));
projects.forEach((p) => p.stack.forEach((name) => {
  const canonical = spelling[normalize(name)];
  check(!canonical || canonical === name, `projects.${p.id}: "${name}" should be spelled "${canonical}"`);
}));

if (errors.length) {
  console.error(`${errors.length} data problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("Data OK");
