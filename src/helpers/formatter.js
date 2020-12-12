export const format = (str, pattern) => {
  if (!str) return null;

  let i = -1;
  const v = str.toString();
  return pattern.replace(/9/g, () => {
    i += 1;
    return v[i];
  });
};
