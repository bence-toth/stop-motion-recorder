import { AiFillCamera, AiFillVideoCamera, AiFillDelete } from "react-icons/ai";

import "./Toolbar.css";

interface ToolbarPropsType {
  areFramesSelected: boolean;
  onCapture: () => void;
  onDeleteSelectedFrames: () => void;
}

const Toolbar = ({
  areFramesSelected,
  onCapture,
  onDeleteSelectedFrames,
}: ToolbarPropsType) => (
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
      {areFramesSelected && (
        <button onClick={onDeleteSelectedFrames}>
          <span className="icon">
            <AiFillDelete />
          </span>
          Delete selected frames
        </button>
      )}
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
