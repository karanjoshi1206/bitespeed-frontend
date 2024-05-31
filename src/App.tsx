import { createContext, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";

import ChatBotFlow from "./components/ChatBotFlow/ChatBotFlow";
import Header from "./components/Header/Header";
import Settings from "./components/Settings/Settings";

import { initialEdges, initialNodes } from "./data";
import "./App.scss"

export const SelectedNodeContext = createContext({ selectedNode: null, setSelectedNode: (_) => {}, nodes: [], setNodes: (_) => {}, edges: [], setEdges: (_) => {} });
const SelectedNodeProvider = SelectedNodeContext.Provider;

const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  return (
    <SelectedNodeProvider value={{ selectedNode, setSelectedNode, nodes: nodes, setNodes: setNodes, edges: edges, setEdges: setEdges }}>
      <Header />
      <div className="main_container">
        <ChatBotFlow />
        <Settings />
      </div>
    </SelectedNodeProvider>
  );
};

export default App;
