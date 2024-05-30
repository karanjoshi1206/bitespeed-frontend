import { useCallback } from "react";

import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges } from "reactflow";
import "reactflow/dist/style.css";

import TextNode from "../CustomNode/CustomNode";
import { handleConnect } from "./reactflow.service";
import { TReactFlow } from "./reactFlowWrapper.model";

const nodeTypes = {
  textNode: TextNode
};
function Flow({ edges, nodes, setEdges, setNodes, handleNodeClick }: TReactFlow) {
  const onNodesChange = useCallback((changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params: any) => {
    handleConnect(params, setEdges);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow onConnect={onConnect} onNodeClick={handleNodeClick} nodeTypes={nodeTypes} nodes={nodes} onNodesChange={onNodesChange} edges={edges} onEdgesChange={onEdgesChange} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
