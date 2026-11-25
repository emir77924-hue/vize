export function parseDate(value) { // "15-10-2026" → Date (sadece GG-AA-YYYY geçerli)
  if (value instanceof Date) return value;
  if (typeof value !== "string") return new Date(NaN);
  // Sadece GG-AA-YYYY biçimi kabul edilir
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  if (!m) return new Date(NaN); // biçim yanlış → validator 400 döndürür
  const [, gun, ay, yil] = m.map(Number);
  const tarih = new Date(Date.UTC(yil, ay - 1, gun));
  if (tarih.getUTCDate() !== gun || tarih.getUTCMonth() !== ay - 1) {
    return new Date(NaN); // 31-02-2026 gibi geçersiz gün
  }
  return tarih;
}

export function formatDate(tarih) { // Date → "15-10-2026"
  if (!(tarih instanceof Date)) return tarih;
  const gun = String(tarih.getUTCDate()).padStart(2, "0");
  const ay  = String(tarih.getUTCMonth() + 1).padStart(2, "0");
  return `${gun}-${ay}-${tarih.getUTCFullYear()}`;
}

export function todayStart() { // bugünün başı, /upcoming için
  const s = new Date();
  return new Date(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()));
}
