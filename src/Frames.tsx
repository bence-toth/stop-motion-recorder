import { useRef, useLayoutEffect } from "react";

import Frame from "./Frame";

import type { FrameType } from "./App";

import "./Frames.css";

interface FramesPropsType {
  frames: FrameType[];
  toggleFrameSelection: (frameId: number) => void;
  deleteFrame: (frameId: number) => void;
}

const Frames = ({
  frames,
  toggleFrameSelection,
  deleteFrame,
}: FramesPropsType) => {
  const framesEndRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (frames.length > 0) {
      requestAnimationFrame(() => {
        if (framesEndRef.current !== null) {
          framesEndRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  }, [frames.length]);

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
