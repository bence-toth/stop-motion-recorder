import { useCallback } from "react";
import classNames from "classnames";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

import type { FrameType } from "./App";

import "./Frame.css";

interface FramesPropsType {
  frame: FrameType;
  toggleFrameSelection: (frameId: number) => void;
  deleteFrame: (frameId: number) => void;
}

const Frame = ({
  frame,
  toggleFrameSelection,
  deleteFrame,
}: FramesPropsType) => {
  const onSelectButtonClick = useCallback(() => {
    toggleFrameSelection(frame.id);
  }, [frame.id, toggleFrameSelection]);

  const onDeleteButtonClick = useCallback(() => {
    deleteFrame(frame.id);
  }, [deleteFrame, frame.id]);

  return (
    <li
      key={frame.id}
      className={classNames("frame", { selected: frame.isSelected })}
    >
      <button className="select" onClick={onSelectButtonClick}>
        <div className="icon">
          <AiFillCheckCircle />
        </div>
      </button>
      <button
        className="delete"
        onClick={onDeleteButtonClick}
        disabled={frame.isSelected}
      >
        <AiFillDelete />
      </button>
      <img src={frame.dataURL} alt="" />
    </li>
  );
};

export default Frame;
