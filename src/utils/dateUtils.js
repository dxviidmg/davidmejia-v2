export const yearsOfExperience = Math.floor((new Date() - new Date("2016-11-03")) / 31557600000);

export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function calcExperience(periods) {
    let totalMonths = 0;
    const now = new Date();
    for (const p of periods) {
        const startStr = p.start.length === 7 ? p.start + "-01" : p.start;
        const endStr = p.end ? (p.end.length === 7 ? p.end + "-01" : p.end) : null;
        const start = new Date(startStr);
        const end = endStr ? new Date(endStr) : now;
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        totalMonths += Math.max(months, 1);
    }
    if (totalMonths >= 12) {
        const years = Math.floor(totalMonths / 12);
        const rem = totalMonths % 12;
        return { label: rem > 0 ? `${years}y ${rem}m` : `${years}y`, months: totalMonths };
    }
    return { label: `${totalMonths}m`, months: totalMonths };
}

const LOCALES = { es: "es-MX", en: "en-US" };

// "2024-01" -> "Ene 2024" / "Jan 2024"; a bare year ("2014") stays as is
export function formatMonth(value, lang) {
    const [year, month] = value.split("-").map(Number);
    if (!month) return String(year);
    const text = new Intl.DateTimeFormat(LOCALES[lang], { month: "short", year: "numeric" }).format(new Date(year, month - 1, 1));
    return capitalizeString(text.replace(".", ""));
}

// ("2024-01", "2026-08") -> "Ene 2024 – Ago 2026"; no end -> "… – Hoy"; same start and end -> one date
export function formatPeriod(start, end, lang, present) {
    if (end === start) return formatMonth(start, lang);
    return `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : present}`;
}
