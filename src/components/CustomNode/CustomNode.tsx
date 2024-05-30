import { Handle, Position } from "reactflow";
import "./CustomNode.scss";

const TextNode = ({ data }) => {
  return (
    <div className="custom-node">
      <div className="header">
        <div className="title"> {data.title ? data.title : "Title"}</div>
      </div>
      <div className="body">
        <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={{ background: "#555" }} />
      <Handle type="target" position={Position.Top} id="b" style={{ background: "#555" }} />
    </div>
  );
};

export default TextNode;
