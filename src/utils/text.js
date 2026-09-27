// Case- and space-insensitive key, so "MySQL", "Mysql" or "Mercado Pago" all match
export const normalize = (name) => name.toLowerCase().replace(/[\s.]/g, "");
