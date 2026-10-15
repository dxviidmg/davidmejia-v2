// Case-, space- and slash-insensitive key, so "MySQL", "Mysql", "Mercado Pago" or "CI/CD" all match
export const normalize = (name) => name.toLowerCase().replace(/[\s./]/g, "");
