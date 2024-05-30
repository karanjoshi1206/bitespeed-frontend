export type TReactFlow = {
  nodes: Array<{
    id?: string;
    data?: { label?: string };
    position?: { x?: number; y?: number };
    type?: string;
  }>;
  edges: Array<{
    id?: string;
    source?: string;
    target?: string;
    label?: string;
    type?: string;
  }>;
  setNodes: any;
  setEdges: any;
  handleNodeClick: any;
};
