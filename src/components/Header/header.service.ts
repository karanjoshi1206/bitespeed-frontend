const handleSave = (edges, nodes, setError) => {
  if (edges.length < nodes.length - 1) {
    setError(true);
    return;
  }
  setError(false);
  setTimeout(() => {
    setError(null);
  }, 2000);
};

export { handleSave };
