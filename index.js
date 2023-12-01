export function getMostUsedLetter(str) {
  const charObj = str
    .toString()
    .toLowerCase()
    .split('')
    .reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {});

  const max = Math.max(...Object.values(charObj));

  return Object.entries(charObj).reduce(
    (ac, [k, v]) => (v === max ? ac + k : ac),
    ''
  );
}
