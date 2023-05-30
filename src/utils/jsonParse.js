export const jsonParse = (value) => {
  if (value === null) return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};
