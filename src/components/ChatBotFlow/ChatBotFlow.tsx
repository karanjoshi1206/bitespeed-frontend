import { useCallback, useContext } from "react";

import ReactFlowWrapper from "../ReactFlowWrapper/ReactFlowWrapper";
import { SelectedNodeContext } from "../../App";

import "./ChatBotFlow.scss";

const ChatBotFlow = () => {
  // use selected node context from app.tsx
  const { setSelectedNode, nodes, setNodes, edges, setEdges } = useContext(SelectedNodeContext);

  const handleNodeClick = useCallback((_: any, node: any) => {
    setSelectedNode(node);
  }, []);
  return (
    <div className="flow_container">
      <ReactFlowWrapper handleNodeClick={handleNodeClick} setEdges={setEdges} setNodes={setNodes} nodes={nodes} edges={edges} />
    </div>
  );
};

export default ChatBotFlow;
