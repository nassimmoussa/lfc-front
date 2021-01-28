export const deleteEmptyAttributes = (obj) => {
  Object.keys(obj).forEach((propName) => {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName];
    }
  });
};
