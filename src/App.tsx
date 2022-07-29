import { useMemo } from "react";

import useFrames from "./useFrames";
import useCapture from "./useCapture";

import Header from "./Header";
import Frames from "./Frames";
import Toolbar from "./Toolbar";

import "./App.css";

export interface FrameType {
  id: number;
  dataURL: string;
  isSelected: boolean;
}

const App = () => {
  const {
    frames,
    lastFrame,
    onAddFrame,
    onDeleteFrame,
    onDeleteSelectedFrames,
    onToggleFrameSelection,
  } = useFrames();

  const { videoElementRef, lastPictureElementRef, onCapture, framesEndRef } =
    useCapture({
      onAddFrame,
    });

  const areFramesSelected = useMemo(
    () => frames.some((frame) => frame.isSelected),
    [frames]
  );

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main-inner-wrapper">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video className="video" autoPlay ref={videoElementRef}></video>
          <canvas className="last-picture-canvas" ref={lastPictureElementRef} />
          {lastFrame !== null && (
            <img className="last-picture" src={lastFrame.dataURL} alt="" />
          )}
        </div>
      </main>
      <aside className="sidebar">
        <Frames
          frames={frames}
          toggleFrameSelection={onToggleFrameSelection}
          deleteFrame={onDeleteFrame}
          framesEndRef={framesEndRef}
        />
      </aside>
      <Toolbar
        areFramesSelected={areFramesSelected}
        onCapture={onCapture}
        onDeleteSelectedFrames={onDeleteSelectedFrames}
      />
    </div>
  );
};

export default App;
