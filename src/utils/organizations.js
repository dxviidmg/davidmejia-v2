import organizations from "../data/organizations.json";
import { normalize } from "./text";

// Companies and institutions share one source (name, website, logo), used by Experience, Education and the maps.
// Looked up by id ("citnova", used in the data files) or by full name ("Instituto Tecnológico de Pachuca", used in the texts).
const ORGS = Object.entries(organizations).map(([id, org]) => ({ id, ...org }));
const BY_KEY = Object.fromEntries(ORGS.flatMap((org) => [[normalize(org.id), org], [normalize(org.name), org]]));

export const getOrganization = (key) => BY_KEY[normalize(key || "")] || { name: key };

// Short label for tight spaces (maps): "CITNOVA" instead of "Gobierno del Estado de Hidalgo - CITNOVA"
export const getShortName = (key) => { const org = getOrganization(key); return org.short || org.name; };
