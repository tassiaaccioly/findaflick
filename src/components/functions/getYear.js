function getYear(date) {
  date.toString();
  let year = date.split("-");

  return year[0];
}

export default getYear;
