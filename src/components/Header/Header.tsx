import { useContext, useState } from "react";

import { SelectedNodeContext } from "../../App";
import Button from "../Button/Button";

import "./Header.scss";
import { handleSave } from "./header.service";
const Header = () => {
  const [error, setError] = useState(null);
  const { edges, nodes } = useContext(SelectedNodeContext);
  const handleSaveChanges = () => {
    handleSave(edges, nodes, setError);
  };
  return (
    <div className="header_container">
      {error !== null && <>{error === true ? <div className="header_error header_message">Cannot save flow</div> : <div className="header_success header_message">Successfully saved</div>}</>}
      <div className="header_cta">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
    </div>
  );
};

export default Header;
