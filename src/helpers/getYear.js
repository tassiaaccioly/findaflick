export const getYear = (date) => {
  date.toString();
  const year = date.split("-");

  return year[0];
};

export default getYear;
