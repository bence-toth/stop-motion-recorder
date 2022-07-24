import { useRef, useLayoutEffect } from "react";

import type { Frame } from "./App";

import "./Frames.css";

interface FramesProps {
  frames: Frame[];
}

const Frames = ({ frames }: FramesProps) => {
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
          <li key={frame.timestamp} className="frame">
            <img src={frame.dataURL} alt="" />
          </li>
        ))}
      </ul>
      <div ref={framesEndRef} />
    </>
  );
};

export default Frames;
