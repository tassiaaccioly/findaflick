const getRuntime = (runtime) => {
  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;

  return `${hour}h${min}min`;
};

export default getRuntime;
