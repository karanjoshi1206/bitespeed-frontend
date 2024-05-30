const initialNodes = [
  {
    id: "1",
    data: { label: "Hello There" },
    position: { x: 0, y: 0 },
    type: "textNode"
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
    type: "textNode"
  }
];
const initialEdges = [{ id: "1-2", source: "1", target: "2", type: "smooth" }];

export { initialNodes, initialEdges };
