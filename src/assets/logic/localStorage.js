const storage = (() => {
  const save = (filters) => {
    localStorage.filters = JSON.stringify(filters);
  };

  const load = () => {
    const filters = JSON.parse(localStorage.filters);
    return filters;
  };

  return { save, load };
})();

export default storage;
