import { useRef, useLayoutEffect } from "react";

import type { Frame } from "./App";

import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

import "./Frames.css";
import classNames from "classnames";

interface FramesProps {
  frames: Frame[];
  toggleFrameSelection: (frameId: number) => void;
  deleteFrame: (frameId: number) => void;
}

const Frames = ({ frames, toggleFrameSelection, deleteFrame }: FramesProps) => {
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
          <li
            key={frame.id}
            className={classNames("frame", { selected: frame.isSelected })}
          >
            <button
              className="select"
              onClick={() => {
                toggleFrameSelection(frame.id);
              }}
            >
              <div className="icon">
                <AiFillCheckCircle />
              </div>
            </button>
            <button
              className="delete"
              onClick={() => {
                deleteFrame(frame.id);
              }}
              disabled={frame.isSelected}
            >
              <AiFillDelete />
            </button>
            <img src={frame.dataURL} alt="" />
          </li>
        ))}
      </ul>
      <div ref={framesEndRef} />
    </>
  );
};

export default Frames;
