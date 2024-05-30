const handleConnect = (params, setEdges) => {
  setEdges((eds: any) => [
    ...eds,
    {
      id: `${params.source}-${params.target}`,
      source: params.source,
      target: params.target,
      type: "smooth"
    }
  ]);
};

export { handleConnect };
