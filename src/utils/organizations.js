import organizations from "../data/organizations.json";
import { normalize } from "./text";

// Companies and institutions share one source (name, website, logo), used by Experience and Education
const BY_KEY = Object.fromEntries(Object.entries(organizations).map(([name, org]) => [normalize(name), { name, ...org }]));

export const getOrganization = (name) => BY_KEY[normalize(name || "")] || { name };
