const deepEqual = (x, y) => {
  if (x === y) return true;
  if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
    return false;
  }
  const keysX = Object.keys(x), keysY = Object.keys(y);
  if (keysX.length !== keysY.length) return false;
  for (const key of keysX) {
    if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
  }
  return true;
};