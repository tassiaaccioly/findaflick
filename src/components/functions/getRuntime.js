function getRuntime(runtime) {
  let hour = Math.floor(runtime / 60);
  let min = runtime % 60;

  return `${hour}h${min}min`;
}

export default getRuntime;
