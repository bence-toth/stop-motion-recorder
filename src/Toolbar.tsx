import { AiFillCamera, AiFillVideoCamera, AiFillDelete } from "react-icons/ai";

import "./Toolbar.css";

interface ToolbarPropsType {
  onCapture: () => void;
  onDeleteSelectedFrames: () => void;
}

const Toolbar = ({ onCapture, onDeleteSelectedFrames }: ToolbarPropsType) => (
  <footer className="toolbar">
    <div className="buttons-wrapper">
      <button onClick={onCapture}>
        <span className="icon">
          <AiFillCamera />
        </span>
        Capture
      </button>
    </div>
    <div className="buttons-wrapper">
      <button onClick={onDeleteSelectedFrames}>
        <span className="icon">
          <AiFillDelete />
        </span>
        Delete selected
      </button>
      <button>
        <span className="icon">
          <AiFillVideoCamera />
        </span>
        Preview
      </button>
    </div>
  </footer>
);

export default Toolbar;
