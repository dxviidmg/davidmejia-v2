export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function calcExperience(periods) {
    let totalMonths = 0;
    const now = new Date();
    for (const p of periods) {
        const start = new Date(p.start + "-01");
        const end = p.end ? new Date(p.end + "-01") : now;
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
