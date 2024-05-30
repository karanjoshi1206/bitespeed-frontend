import { memo, useContext } from "react";
import "./Settings.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SelectedNodeContext } from "../../App";
import Button from "../Button/Button";
import { AiOutlineMessage } from "react-icons/ai";
import { addNode, handleTextChange } from "./settings.service";

const Settings = () => {
  const { selectedNode, setNodes, nodes, setSelectedNode } = useContext(SelectedNodeContext);
  const handleNodeTextChange = (e: any) => {
    handleTextChange(e, setNodes, selectedNode);
  };

  const handleAddNode = () => {
    addNode(setNodes, nodes);
  };

  return (
    <div className="settings-container">
      {selectedNode ? (
        <>
          <div className="settings-header">
            <div onClick={() => setSelectedNode(null)} className="goback">
              <IoIosArrowRoundBack />
            </div>

            <div className="settings-title">{selectedNode?.type === "textNode" ? "Message" : "Other"}</div>
          </div>

          <div className="selected-card">
            <p className="card-type">Text</p>
            <textarea onChange={handleNodeTextChange} value={nodes.find((elem)=>elem.id === selectedNode.id)?.data?.label} name="" id=""></textarea>
          </div>
        </>
      ) : (
        <>
          <Button style={{ padding: "10px 40px" }} icon={<AiOutlineMessage />} onClick={handleAddNode}>
            Message
          </Button>

          {/* ADD MORE BUTTON TYPE TO ADD  MORE TYPE OF NODES*/}
        </>
      )}
    </div>
  );
};

export default memo(Settings);
