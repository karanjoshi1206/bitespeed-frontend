const handleTextChange = (e: any, setNodes: any, selectedNode: any) => {
  setNodes((nds) =>
    nds.map((node) => {
      if (node.id === selectedNode.id) {
        node.data = {
          ...node.data,
          label: e.target.value,
          
        };
      }

      return node;
    })
  );
};
const addNode = (setNodes: any, nodes: any) => {
  const newNodes = [...nodes];
  newNodes.push({
    id: `${newNodes.length + 1}`,
    data: { label: "New Node" ,title:"A Title"},
    position: { x: 20, y: 20 },
    type: "textNode"
  });
  setNodes(newNodes);
};
export { handleTextChange, addNode };
