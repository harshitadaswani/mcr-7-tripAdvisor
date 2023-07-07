export const getDetails = (list, name) => {
  return list.find((place) => place.name === name);
};
