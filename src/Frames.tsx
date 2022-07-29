import Frame from "./Frame";

import type { FrameType } from "./App";

import "./Frames.css";

interface FramesPropsType {
  frames: FrameType[];
  toggleFrameSelection: (frameId: number) => void;
  deleteFrame: (frameId: number) => void;
  framesEndRef: {
    current: HTMLDivElement | null;
  };
}

const Frames = ({
  frames,
  toggleFrameSelection,
  deleteFrame,
  framesEndRef,
}: FramesPropsType) => {
  if (frames.length === 0) {
    return null;
  }

  return (
    <>
      <ul className="frames">
        {frames.map((frame) => (
          <Frame
            key={frame.id}
            frame={frame}
            toggleFrameSelection={toggleFrameSelection}
            deleteFrame={deleteFrame}
          />
        ))}
      </ul>
      <div ref={framesEndRef} />
    </>
  );
};

export default Frames;
