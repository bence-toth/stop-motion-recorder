import { AiFillCamera, AiFillVideoCamera, AiFillDelete } from "react-icons/ai";

import "./Toolbar.css";

interface ToolbarPropsType {
  onCapture: () => void;
  onDeleteSelectedFrames: () => void;
}

const Toolbar = ({ onCapture, onDeleteSelectedFrames }: ToolbarPropsType) => (
  <footer className="toolbar">
    <div>
      <button onClick={onCapture}>
        <span className="icon">
          <AiFillCamera />
        </span>
        Capture
      </button>
    </div>
    <div>
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
