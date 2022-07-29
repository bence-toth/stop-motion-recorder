import { AiFillCamera, AiFillVideoCamera } from "react-icons/ai";

import "./Toolbar.css";

interface ToolbarPropsType {
  onCapture: () => void;
}

const Toolbar = ({ onCapture }: ToolbarPropsType) => (
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
